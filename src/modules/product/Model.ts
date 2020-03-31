import { model, Schema } from 'mongoose';
import { IProductModel } from './typing';

let ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  stockQtt: { type: Number, required: true },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Sellers'
  }
});

export let ProductModel = model<IProductModel>('Products', ProductSchema);
