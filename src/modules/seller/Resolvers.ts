import { SellerModel } from './Model';

export function sellers() {
  return SellerModel.find({});
}

export function createSeller({
  name,
  recipient
}: {
  name: string;
  recipient: string;
}) {
  const newSeller = new SellerModel({
    name,
    recipient
  });
  newSeller.save();
  return newSeller;
}
