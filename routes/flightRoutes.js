import express from 'express';
import { getFlights, createFlight, getFlight, updateFlight, deleteFlight } from '../controllers/flightController.js';
import { validateInput } from '../middleware/validateInput.js';

const flightRoutes = express.Router();

flightRoutes.get('/', getFlights);
flightRoutes.post('/', validateInput, createFlight);
flightRoutes.get('/:id', getFlight);
flightRoutes.put('/:id', updateFlight);
flightRoutes.delete('/:id', deleteFlight);
/**
 * @swagger
 * /flights:
 *   get:
 *     summary: Get all flights
 *     responses:
 *       200:
 *         description: A list of flights
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   flightNo:
 *                     type: string
 *                   from:
 *                     type: string
 *                   to:
 *                     type: string
 *                   departure:
 *                     type: string
 *                   arrival:
 *                     type: string
 *                   price:
 *                     type: number
 *                   seats:
 *                     type: number
 *                   date:
 *                     type: string
 *                     format: date-time
 */
/**
 * @swagger
 * /flights:
 *   post:
 *     summary: Create a new flight
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               flightNo:
 *                 type: string
 *               from:
 *                 type: string
 *               to:
 *                 type: string
 *               departure:
 *                 type: string
 *               arrival:
 *                 type: string
 *               price:
 *                 type: number
 *               seats:
 *                 type: number
 *     responses:
 *       201:
 *         description: Flight created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 flightNo:
 *                   type: string
 *                 from:
 *                   type: string
 *                 to:
 *                   type: string
 *                 departure:
 *                   type: string
 *                 arrival:
 *                   type: string
 *                 price:
 *                   type: number
 *                 seats:
 *                   type: number
 *       400:
 *         description: Invalid input
 */


export default flightRoutes;
