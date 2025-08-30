import express from 'express'
import { register, login } from '../controllers/auth.js';
import { loginSchema } from '../validation/authValidation.js';
import { validate } from '../utils/index.js';


const UserRoutes = express.Router();

UserRoutes.post('/register',register)
UserRoutes.post('/login',validate(loginSchema),login)

export default UserRoutes