import { expect } from 'chai';
import sinon from 'sinon';
import { UserModel } from '../UserModel';

describe('UserResolvers', function() {
  it('should ', function(done) {
    let UserModelMock = sinon.mock(UserModel);
    UserModelMock.expects('find').yields(null, []);
    UserModel.find(function(err, result) {
      UserModelMock.verify();
      UserModelMock.restore();
      expect(result).to.be.an('array');
      done();
    });
  });
});
