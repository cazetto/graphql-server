import { Document } from 'mongoose';

export interface IProductModel extends Document {
  name: string;
  description: string;
  price: string;
  stockQtt: number;
  seller: string;
}
