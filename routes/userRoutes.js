import express from 'express';
import { getUsers, createUser, getUser, updateUser, deleteUser } from '../controllers/userController.js';
import { validateInput } from '../middleware/validateInput.js';

const userRoutes = express.Router();

userRoutes.get('/getUsers', getUsers);
userRoutes.post('/createUser', createUser);
userRoutes.get('/getUser/:id', getUser);
userRoutes.put('/updateUser/:id', updateUser);
userRoutes.delete('/deleteUser/:id', deleteUser);


export default userRoutes;
