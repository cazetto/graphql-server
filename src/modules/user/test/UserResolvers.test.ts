import { expect } from 'chai';
import sinon from 'sinon';
import { UserModel } from '../UserModel';

describe('UserResolvers', function() {
  beforeEach(function() {
    // sinon.stub(UserModel, 'find');
  });

  afterEach(function() {
    // (UserModel.find as any).restore();
  });

  it('should ', function(done) {
    // const users = UserModel.find({});
    // console.log(users);

    let UserModelMock = sinon.mock(UserModel);
    UserModelMock.expects('find').yields(null, []);
    UserModel.find(function(err, result) {
      UserModelMock.verify();
      UserModelMock.restore();
      console.log(result);
      expect(result).to.be.an('array');
      done();
    });
  });
});
