import { SellerModel } from './Model';

export async function sellers() {
  let result = await SellerModel.find({}).populate('products');
  return result;
}

export async function createSeller({
  name,
  recipient
}: {
  name: string;
  recipient: string;
}) {
  let newSeller = new SellerModel({
    name,
    recipient
  });
  await newSeller.save();
  return newSeller;
}

// createSeller({
//   name: 'IT Books Store',
//   recipient: 're_ck66pfde20fc3gw6fpor2tw3b'
// });
// createSeller({
//   name: 'Newsstand Kindle Street',
//   recipient: 're_ck6lg6xsb0p9loz6dyiv6rnjf'
// });
// createSeller({
//   name: 'Jonh Book Seller',
//   recipient: 're_ck6lg9kxo0p9ooz6d9av5b06d'
// });
