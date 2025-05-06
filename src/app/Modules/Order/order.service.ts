import Book from '../Book/book.model';
import { TOrder } from './order.interface';
import Order from './order.model';

const createOrder = async (payload: TOrder): Promise<TOrder> => {
  const { product, quantity } = payload;
  const productData = await Book.findById(product);
  if (!productData) {
    throw new Error('Product not found');
  }

  if (productData.quantity < 1) {
    productData.inStock = false;
    productData.save();
    throw new Error('Product is out of stock');
  }
  if (productData.quantity < quantity) {
    throw new Error('Product quantity is not available');
  }
  // update product quantity
  const updatedProduct = await Book.findByIdAndUpdate(
    product,
    { quantity: productData.quantity - quantity },
    { new: true },
  );
  if (!updatedProduct) {
    throw new Error('Product could not updated');
  }
  const result = await Order.create(payload);
  return result;
};
const revenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  return result;
};
//=======================getAllOrders========================
const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

export const orderService = {
  createOrder,
  revenue,
  getAllOrders,
};
