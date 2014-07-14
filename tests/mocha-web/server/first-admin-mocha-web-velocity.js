if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function() {
    chai.should()

    describe("User", function() {

      it("makes the first one an admin", function() {
        Meteor.users.remove({});
        Accounts.createUser({email: 'joe@sixpack.com', password: 'abcd1234'})
        Meteor.users.find({}).fetch[0].admin.should.be.true
      });
    });
  });
}