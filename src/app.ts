import express, { Request, Response } from 'express';
import cors from 'cors';
import OrderRouter from './app/Modules/Order/order.route';
import bookRouter from './app/Modules/Book/book.route';
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

export default app;
