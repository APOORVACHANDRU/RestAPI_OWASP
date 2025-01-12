import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import flightRoutes from './routes/flightRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import isAuthenticated from './middleware/verifyToken.js';
import validateRoles from './middleware/validateRoles.js';
import limiter from './middleware/rateLimiter.js';

// MongoDB Connection
const CONNECTION_URL = 'mongodb+srv://apoorvarsp:ggcDhZFdHx9H2lYx@backendrestapidb.6g2hz.mongodb.net/?retryWrites=true&w=majority&appName=BackendRestApiDB';

const PORT = process.env.PORT || 5000;

// Swagger/OpenAPI Configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Basic REST API',
            version: '1.0.0',
            description: 'A simple Express.js API',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`, // API base URL
            },
        ],
    },
    apis: ['./routes/flightRoutes.js', './controllers/flightController.js'], // Files containing annotations for the OpenAPI spec
};
const app = express()
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(limiter);

// Public route: No token required
app.use('/api/auth', authRoutes);

// Protected route: Token required
app.get('/api/protected', [isAuthenticated, validateRoles('user', 'editor', 'admin'), limiter], (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

app.use('/flights', flightRoutes)
app.use('/users', limiter, userRoutes)

mongoose.connect(CONNECTION_URL)
    .then(() => {
        console.log('Database connected successfully')
        app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
    })
    .catch((error) => console.log(`${error} did not connect`));

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to the Basic REST API . You can open the API documentation at /docs');
});