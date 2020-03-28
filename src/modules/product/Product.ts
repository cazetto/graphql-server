import { ProductModel } from './Model';
import { SellerModel } from '../seller/Model';

export function products() {
  return ProductModel.find({}).populate('seller');
}

export async function createProduct({
  name,
  description,
  price,
  stockQtt,
  seller
}: {
  name: string;
  description: string;
  price: string;
  stockQtt: number;
  seller: string;
}) {
  let newProduct = new ProductModel({
    name,
    description,
    price,
    stockQtt,
    seller
  });
  await newProduct.save();
  let currentSeller = await SellerModel.findOne({ _id: seller });
  currentSeller?.products.push(newProduct.id);
  currentSeller?.save();

  return newProduct;
}

createProduct({
  name: 'Product 2',
  description: 'Product 2 Description',
  price: '100',
  stockQtt: 100,
  seller: '5e7d7b10bdee9c47d11a88e3'
});
