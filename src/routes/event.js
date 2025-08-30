import express from 'express'   
import { createvent, eventMe, getAllvents, markCancel, markPublish, updateEvent } from '../controllers/event.js';
import { protect } from '../middleware/auth.js';
import { isAdmin } from '../middleware/RoleMiddleware.js';

const eventRoutes = express.Router();

eventRoutes.post('/events',protect,isAdmin,createvent)
eventRoutes.patch('/events/:id',protect,isAdmin,updateEvent)
eventRoutes.post('/events/:id/publish',protect,isAdmin, markPublish)
eventRoutes.post('/events/:id/cancel',protect,isAdmin,markCancel)
eventRoutes.get("/events/me",eventMe)
eventRoutes.get("/events",getAllvents)

export default eventRoutes