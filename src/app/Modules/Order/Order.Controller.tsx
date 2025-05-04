import { Request, Response } from 'express';
import { orderService } from './Order.Service';

const createOrder = (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = orderService.createOrder(order);
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllOrders = (req: Request, res: Response) => {
  try {
    const result = orderService.getAllOrder();
    res.status(201).json({
      success: true,
      message: 'All order fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSingleOrder = (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = orderService.getSingleOrder(order);
    res.status(201).json({
      success: true,
      message: 'Order fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
