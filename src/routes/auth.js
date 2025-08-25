import express from 'express'
import { register } from '../controllers/auth';


const routes = express.Router();

routes.post('/register',register)
routes.post('/login',login)

export default routes