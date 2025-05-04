import express, { Request, Response } from 'express';
import cors from 'cors';
import BookRoutes from './app/Modules/Book/Book.Route';
import OrderRoutes from './app/Modules/Order/Order.Route';
// import { StudentRoutes } from './app/Modules/Student/Student.router';
const app = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/books', BookRoutes); //Book routes
app.use('/api/v1/orders', OrderRoutes); //Order routes

//routes

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!!!!!!!!!!!');
});

export default app;
