import { model, Schema } from 'mongoose';

const SellerSchema = new Schema({
  name: String,
  recipient: String
});

export const SellerModel = model('Sellers', SellerSchema);
