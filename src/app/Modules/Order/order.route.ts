import express from 'express';
import { orderController } from './order.controller';
// import { OrderValidation } from './Order.Validation';

const router = express.Router();
router.post('/', orderController.createOrder); // Create a new order
// router.get('/getSingleOrder', orderController.getSingleOrder); // Get a single order by ID
router.get('/revenue', orderController.revenue);
export const OrderRoutes = router;
