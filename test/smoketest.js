var expect = require('chai').expect;

describe('Smoke Tests', function() {

  before(function() {
    browser
        .url('/')
        .setValue('#j_username', process.env.RALLY_USERNAME)
        .setValue('#j_password', process.env.RALLY_PASSWORD)
        .submitForm('#login-form');
  });

  it('should confirm successful login and see the nav bar', function() {
    expect(browser.waitForExist('#header')).to.be.true;
  });

  it('should load the Iteration Status Page', function() {
    expect(browser.waitForExist('a=Track')).to.be.true;
    browser.doubleClick('a=Track');
    expect(browser.waitForExist('.iterationtrackingboard')).to.be.true;
  });

  it('should load the Defects Page', function() {
    expect(browser.waitForExist('a=Quality')).to.be.true;
    browser.doubleClick('a=Quality');
    expect(browser.waitForExist('#defect')).to.be.true;
  });

  it('should load the Portfolio Items Page', function() {
    expect(browser.waitForExist('a=Portfolio')).to.be.true;
    browser.doubleClick('a=Portfolio');
    expect(browser.waitForExist('.rui-gridboard')).to.be.true;
  });

  after(function() {
    browser.url('https://rally1.rallydev.com/slm/j_spring_security_logout');
  });

})
