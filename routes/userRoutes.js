import express from 'express';
import { getUsers, createUser, getUser, updateUser, deleteUser } from '../controllers/userController.js';
import { validateInput } from '../middleware/validateInput.js';

const userRoutes = express.Router();

userRoutes.get('/', getUsers);
userRoutes.post('/', createUser);
userRoutes.get('/:id', getUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);


export default userRoutes;
