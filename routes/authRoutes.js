import express from 'express';
import { register, login } from '../controllers/authController.js';
import { validateInput } from '../middleware/validateInput.js';

const authRoutes = express.Router();


// Register Route: Hash password and store the user
authRoutes.post('/register', register);

// Login Route: Authenticate user and generate JWT token
authRoutes.post('/login', login);

export default authRoutes;
