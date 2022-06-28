import { Document, Model } from 'mongoose';
import { IInventory } from './inventory';

export interface IOrder extends Document {
  id: string;
  client: {
    name: string;
    surname: string;
    city: string;
    street: string;
    houseNumber: string;
    phone: string;
  };
  paymentStatus: {
    method: string;
    paid: boolean;
    id: string;
  };
  comment: string;
  totalPayment: number;
  meals: Array<IInventory>;
}

export interface IOrderModel extends Model<IOrder> {
  createNewFromRequestBody(order: IOrder): Promise<any>;
  getLength(): Promise<number>;
  confirmPayment(id: string): Promise<void>;
}
