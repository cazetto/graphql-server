import { model, Schema } from 'mongoose';
import { ISellerModel } from './typing';

let SellerSchema: Schema = new Schema({
  name: String,
  recipient: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'Products' }]
});

export let SellerModel = model<ISellerModel>('Sellers', SellerSchema);
