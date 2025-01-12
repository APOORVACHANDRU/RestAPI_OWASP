import mongoose from 'mongoose';
import FlightModel from '../models/flightModel.js';
import express from 'express';

const flightRoutes = express.Router();
const sampleFlight =
{
    name: "Airline sample",
    flightNo: "AA146",
    from: "Bengaluru",
    to: "Amsterdam",
    departure: "2025-01-30T10:00:00Z",
    arrival: "2025-01-30T14:00:00Z",
    price: 600.99,
    seats: 150
};

export const getFlights = async (req, res) => {
    try {
        const allFlights = await FlightModel.find();
        console.log(allFlights);
        res.status(200).json(allFlights);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getFlight = async (req, res) => {
    const { id } = req.params;
    try {
        const flight = await FlightModel.findById(id);
        console.log(flight);
        res.status(200).json(flight);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createFlight = async (req, res) => {
    const flight = req.body;
    const newFlight = new FlightModel(flight);
    console.log("req", req);
    console.log("newFlight", newFlight);
    try {
        await FlightModel.create(newFlight);
        res.status(201).json(newFlight);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateFlight = async (req, res) => {
    const { id } = req.params;
    const { name, flightNo, from, to, departure, arrival, price, seats } = req.body;
    const updatedFlight = { name, flightNo, from, to, departure, arrival, price, seats };
    try {
        const flight = await FlightModel.findByIdAndUpdate(id, updatedFlight, { new: true });
        res.status(200).json(flight);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteFlight = async (req, res) => {
    const { id } = req.params;
    try {
        const flightDelete = await FlightModel.findByIdAndDelete(id);
        if (!flightDelete) {
            return res.status(404).json({ message: "Flight not found" });
        }
        res.status(200).json({ message: "Flight deleted successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export default flightRoutes; 