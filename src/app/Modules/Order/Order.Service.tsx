import { TOrder } from './Order.Interface';
import OrderModel from './Order.Model';

const createOrder = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};
const getAllOrder = async () => {
  const result = await OrderModel.find();
  return result;
};
const getSingleOrder = async (order: TOrder) => {
  const result = await OrderModel.findOne(order);
  return result;
};
const updateOrder = async (order: TOrder) => {
  const result = await OrderModel.findByIdAndUpdate(order._id, order, {
    new: true,
  });
  return result;
};
const deleteOrder = async (order: TOrder) => {
  const result = await OrderModel.findByIdAndDelete(order._id);
  return result;
};
export const orderService = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
