import express from 'express';
import { orderController } from './Order.Controller';
// import { OrderValidation } from './Order.Validation';

const router = express.Router();
router.post('/createOrder', orderController.createOrder); // Create a new order
router.get('/getAllOrders', orderController.getAllOrders); // Get all orders
router.get('/getSingleOrder', orderController.getSingleOrder); // Get a single order by ID
router.patch('/updateOrder', orderController.updateOrder); // Update an order by ID
router.delete('/deleteOrder', orderController.deleteOrder); // Delete an order by ID
export const OrderRoutes = router;
