import { Request, Response } from 'express';
import { orderService } from './order.service';
import { orderValidationSchema } from './order.zod';
import { TOrder } from './order.interface';
import catchAsync from '../../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';

//===================== get All Orders =====================
const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Book deleted successfully',
    data: orders,
  });
});

//===================== create Order =====================

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  // validate request body
  const zodParsedData = orderValidationSchema.parse(payload);
  const { product } = payload;
  const { email, quantity, totalPrice } = zodParsedData;

  const result = await orderService.createOrder({
    email,
    product,
    quantity,
    totalPrice,
  } as TOrder);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Order created successfully',
    data: result,
  });
});

//===================== revenue =====================
const revenue = catchAsync(async (req: Request, res: Response) => {
  const result = await orderService.revenue();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Revenue fetched successfully',
    data: result,
  });
});

export const orderController = {
  createOrder,
  revenue,
  getAllOrders,
};
