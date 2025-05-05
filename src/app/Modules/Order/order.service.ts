import { TOrder } from './order.interface';
import OrderModel from './order.model';

const createOrder = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};
const revenue = async () => {
  const result = await OrderModel.aggregate([
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

export const orderService = {
  createOrder,
  revenue,
};
