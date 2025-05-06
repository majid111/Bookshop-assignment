import { Request, Response } from 'express';
import { orderService } from './order.service';
import { orderValidationSchema } from './order.zod';
import Book from '../Book/book.model';
import { TOrder } from './order.interface';

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const zodParsedData = orderValidationSchema.parse(payload);
    // validate request body
    const { product } = payload;
    const { email, quantity, totalPrice } = zodParsedData;

    // const productData = await Book.findById(product);
    // if (!productData) {
    //   return res.status(404).json({
    //     success: false,
    //     message: 'Product not found',
    //   });
    // }

    // if (productData.quantity < 1) {
    //   productData.inStock = false;
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Product is out of stock',
    //   });
    // }
    // productData.save();
    // if (productData.quantity < quantity) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Product quantity is not available',
    //   });
    // }
    // // update product quantity
    // const updatedProduct = await Book.findByIdAndUpdate(
    //   product,
    //   { quantity: productData.quantity - quantity },
    //   { new: true },
    // );
    // if (!updatedProduct) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Product could not updated',
    //   });
    // }

    const result = await orderService.createOrder({
      email,
      product,
      quantity,
      totalPrice,
    } as TOrder);
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

//===================== revenue =====================
const revenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.revenue();
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
//===================== orders =====================
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json({
      success: true,
      message: 'All orders fetched successfully',
      data: orders,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Orders are not fetched',
      data: error,
    });
  }
};

export const orderController = {
  createOrder,
  revenue,
  getAllOrders,
};
