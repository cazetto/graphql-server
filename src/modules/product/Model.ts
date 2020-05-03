import { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  stockQtt: { type: Number, required: true }
});

export const ProductModel = model('Products', ProductSchema);
