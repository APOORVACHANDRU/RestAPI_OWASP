import mongoose from 'mongoose';
import UserModel from '../models/userModel.js';
import express from 'express';

const UserRoutes = express.Router();

export const getUsers = async (req, res) => {
    try {

        const allUsers = await UserModel.find();
        console.log(allUsers);
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {

        const user = await UserModel.findById(id);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    console.log("req", req);
    console.log("newUser", newUser);
    try {
        await UserModel.create(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, { ...user, id }, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);
    try {
        await UserModel.findByIdAndDelete(id);
        res.json({ message: "User deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}





export default UserRoutes; 