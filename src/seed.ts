import { createUser } from './modules/user/Resolvers';
import { createProduct } from './modules/product/Resolvers';

export function seed() {
  createUser({ firstName: 'André', lastName: 'Cazetto', userName: 'cazetto' });
  createUser({ firstName: 'Jonh', lastName: 'Applessed', userName: 'jonhapp' });

  createProduct({
    name: 'Product 1',
    description: 'Description product 1',
    price: '11,20',
    stockQtt: 10,
  });
  createProduct({
    name: 'Product 1',
    description: 'Description product 1',
    price: '11,20',
    stockQtt: 10,
  });
}
