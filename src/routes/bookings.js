import express from 'express'
import { Booking, getMyBooking } from '../controllers/booking.js';


const bookingRoutes = express.Router();

routes.post('/bookings',Booking)
routes.post('/bookings/me',getMyBooking)

export default bookingRoutes