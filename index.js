import express from 'express';
import { createServer } from 'node:http';
import UserRoutes from './src/routes/auth.js'
import eventRoutes from './src/routes/event.js';
import bookingRoutes from './src/routes/bookings.js';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

app.use(UserRoutes);
app.use(eventRoutes);
app.use(bookingRoutes)

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});