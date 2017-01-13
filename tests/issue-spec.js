const expect = require('chai').expect;
const request = require('request');
const fs = require('fs');

const assertion = {
  "@context": "https://w3id.org/openbadges/v2",
  "type": "Assertion",
  "id": "https://example.org/beths-robotics-badge.json",
  "recipient": {
    "type": "email",
    "hashed": true,
    "salt": "deadsea",
    "identity": "sha256$c7ef86405ba71b85acd8e2e95166c4b111448089f2e1599f42fe1bba46e865c5"
  },
  "image": "https://arcane-dawn-73446.herokuapp.com/images/stamp.png",
  "evidence": "https://example.org/beths-robot-work.html",
  "issuedOn": "2016-12-31T23:59:59Z",
  "expires": "2017-06-30T23:59:59Z",
  "badge": "https://example.org/robotics-badge.json",
  "verification": {
    "type": "hosted"
  }
};

const badgeImage = "tests/stamp.png";

async function doAsyncOp () {

  console.log(val);
  return val;
}


describe('The badge issuer', function() {
  it('should hit the badge server', function(done){
    request()
  });

  it('should pass a test', function(done){
    console.info('|| issue-spec.js.() || :: ');
    expect(true).to.equal(true);
    done();
  });

});
