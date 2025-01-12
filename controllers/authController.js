import mongoose from 'mongoose';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../models/userModel.js';


const authRoutes = express.Router();

export const register = async (req, res) => {
    const { username, email, authentication, lastActivity } = req.body;

    try {
        // Check if user already exists
        const userExists = await UserModel.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(authentication.password, 10);

        const newUser = new UserModel({ username, email, authentication: { password: hashedPassword, }, lastActivity });
        await UserModel.create(newUser);
        console.log("newUser", newUser);
        res.status(201).json({ newUser, message: 'User registered successfully' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const { username, authentication } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    const isMatch = await bcrypt.compare(authentication.password, user.authentication.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    res.json({ token });
}


export default authRoutes; 