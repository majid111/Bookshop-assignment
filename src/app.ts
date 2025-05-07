import express, { Request, Response } from 'express';
import cors from 'cors';
import OrderRouter from './app/Modules/Order/order.route';
import bookRouter from './app/Modules/Book/book.route';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
// import { StudentRoutes } from './app/Modules/Student/Student.router';
const app = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/products', bookRouter); //Book routes
app.use('/api/orders', OrderRouter); //Order routes

//routes

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!!!!!!!!!!!');
});

//global error handler
app.use(globalErrorHandler);

//handle not found routes

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
  });
});

export default app;
