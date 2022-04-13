import { model, Schema } from 'mongoose';
import { IInventory, IInventoryModel } from '../interfaces';

const InventorySchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: String, required: true },
  discount: { type: String, required: true },
  size: { type: Array }
});

InventorySchema.statics.createNewFromRequestBody = async function (props) {
  try {
    const newProduct = new this(props);
    await newProduct.save();
  } catch (err: any) {
    throw new Error(err.message);
  }
};
InventorySchema.statics.findbyProduct = async function (category) {
  return await this.find({ category });
};
InventorySchema.statics.findAllProduct = async function () {
  return await this.find();
};
InventorySchema.statics.addComment = async function (id, newComment) {
  try {
    return await this.findOneAndUpdate({ _id: id }, { $addToSet: { comment: [newComment] } });
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const InventoryModel = model<IInventory, IInventoryModel>('Inventory', InventorySchema);

export default InventoryModel;
