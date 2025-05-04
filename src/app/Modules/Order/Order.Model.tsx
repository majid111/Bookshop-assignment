import { Schema, model } from 'mongoose';
import { TOrder } from './Order.Interface';

const OrderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    Product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const OrderModel = model<TOrder>('Order', OrderSchema);
export default OrderModel;
