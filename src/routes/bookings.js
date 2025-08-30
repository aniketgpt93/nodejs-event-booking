import express from 'express'
import { Booking, getMyBooking } from '../controllers/booking.js';


const bookingRoutes = express.Router();

bookingRoutes.post('/bookings',Booking)
bookingRoutes.post('/bookings/me',getMyBooking)

export default bookingRoutes