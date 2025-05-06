import express from 'express';
import { orderController } from './order.controller';
import { Request, Response } from 'express';
// import { OrderValidation } from './Order.Validation';

const OrderRouter = express.Router();
OrderRouter.post('/', orderController.createOrder); // Create a new order

OrderRouter.get('/revenue', orderController.revenue);
OrderRouter.get('/', orderController.getAllOrders);
export default OrderRouter;
