import { Schema, model } from 'mongoose';
import { IOrder, IOrderModel } from '../interfaces';

const OrderSchema: Schema = new Schema({
  id: { type: String || Number, required: true },
  client: {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    houseNumber: { type: String, required: true },
    phone: { type: String, required: true }
  },
  paymentStatus: {
    method: { type: String },
    paid: { type: Boolean },
    id: { type: String }
  },
  totalPayment: { type: Number, default: 0 },
  product: { type: Array }
});

const CartModel = model<IOrder, IOrderModel>('Order', OrderSchema);
export default CartModel;
