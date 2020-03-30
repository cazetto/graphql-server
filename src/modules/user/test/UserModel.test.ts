import { expect } from 'chai';
import sinon from 'sinon';
import { UserModel } from '../UserModel';

describe('UserModel', function() {
  describe('Validation', function() {
    let user: any;
    beforeEach(function() {
      user = new UserModel({});
    });
    it('should be invalid if firstName is empty', function(done) {
      user.validate(function({ errors }: any) {
        expect(errors.firstName).to.exist;
        done();
      });
    });
    it('should be valid if lastName is empty', function(done) {
      user.validate(function({ errors }: any) {
        expect(errors.lastName).not.exist;
        done();
      });
    });
    it('should be invalid if userName is empty', function(done) {
      user.validate(function({ errors }: any) {
        expect(errors.userName).to.exist;
        done();
      });
    });
    it('should be invalid if email is empty', function(done) {
      user.validate(function({ errors }: any) {
        expect(errors.email).to.exist;
        done();
      });
    });
    it('should be invalid if password is empty', function(done) {
      user.validate(function({ errors }: any) {
        expect(errors.password).to.exist;
        done();
      });
    });
    it('should be valid if gender is empty', function(done) {
      user.validate(function({ errors }: any) {
        expect(errors.gender).not.exist;
        done();
      });
    });
    it('should be valid if creditCards is empty', function(done) {
      user.validate(function({ errors }: any) {
        expect(errors.creditCards).not.exist;
        done();
      });
    });

    it("should be invalid if the password isn't according to the pattern", function(done) {
      user.validate(function({ errors }: any) {
        user = new UserModel({ password: 'abc' });
        expect(errors.password).to.exist;
        done();
      });
    });

    it('should be valid if the password is according to the pattern', function(done) {
      user = new UserModel({ password: 'kjft*xfda!123' });
      user.validate(function({ errors }: any) {
        expect(errors.password).not.exist;
        done();
      });
    });
  });

  describe('Query all', function() {
    it('should return an array ', function(done) {
      // const users = UserModel.find({});
      // console.log(users);

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
});
