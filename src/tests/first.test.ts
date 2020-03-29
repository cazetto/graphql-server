import { expect } from 'chai';
import 'mocha';

describe('Hello test', () => {
  it('should return hello world', () => {
    expect('Hello World!').to.equal('Hello World!');
  });
});
