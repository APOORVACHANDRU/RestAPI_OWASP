// Description: Middleware to verify the JWT token in the Authorization header.
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const isAuthenticated = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token using JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware/route
    } catch (error) {
        res.status(400).json({ message: 'Invalid or expired token' });
    }
};

export default isAuthenticated;
