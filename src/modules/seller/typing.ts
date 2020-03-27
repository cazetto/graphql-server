import { Document } from 'mongoose';

export interface ISellerModel extends Document {
  products: string[];
  _id: string;
  name: string;
  receipient: string;
}
