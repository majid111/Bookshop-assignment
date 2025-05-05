import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = orderService.createOrder(order);
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Order is not created',
      data: error,
    });
  }
};
const revenue = (req: Request, res: Response) => {
  try {
    const result = orderService.revenue();
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Revenue is not calculated',
      data: error,
    });
  }
};

export const orderController = {
  createOrder,
  revenue,
};
