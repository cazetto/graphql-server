import { ProductModel } from './Model';

export function products() {
  return ProductModel.find({});
}

export function createProduct({
  name,
  description,
  price,
  stockQtt
}: {
  name: string;
  description: string;
  price: string;
  stockQtt: number;
}) {
  const newProduct = new ProductModel({
    name,
    description,
    price,
    stockQtt
  });

  newProduct.save();

  return newProduct;
}
