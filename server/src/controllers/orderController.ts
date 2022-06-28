import { Request, Response } from 'express';
import Order from '../models/orderModel';
import { ResponseProcessor, errorHandler } from '../utils';

export const addCart = async (req: Request, res: Response) => {
  try {
    const cart = await Order.createNewFromRequestBody(req.body);
    return ResponseProcessor(res).sendResult({ _id: cart._id });
  } catch (err: any) {
    return ResponseProcessor(res).sendError({ error: err.message });
  }
};

export const getCarts = (req: Request, res: Response) => {
  const { cartId } = req.body;
  errorHandler(res, Order.find({ _id: [...cartId] }));
};

export const confirmPayment = (req: Request, res: Response) => {
  const { id } = req.body;
  errorHandler(res, Order.confirmPayment(id));
};
