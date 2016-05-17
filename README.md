# smoketest-hackathon
Hackathon to create smoke tests for top 10 pages using WebdriverIO

1. Clone this repo
2. Download selenium standalone jar from http://www.seleniumhq.org/download/
3. npm install
4. npm install wdio-mocha-framework
5. npm install chai

To run with local Selenium and browser:

- cd into this repo's directory
- java -jar selenium-server-standalone-2.53.0.jar
- export RALLY_USERNAME={valid ALM username}
- export RALLY_PASSWORD={valid ALM password}
- node_modules/.bin/wdio wdio.conf.js

To run at Sauce Labs:
- export SAUCE_USERNAME={valid Sauce Labs username}
- export SAUCE_ACCESS_KEY={valid Sauce Labs access key}
- export RALLY_USERNAME={valid ALM username}
- export RALLY_PASSWORD={valid ALM password}
- node_modules/.bin/wdio wdio.conf.sauce.js
- Visit https://saucelabs.com/beta/dashboard/tests to see test results

Still to do:
- Figure out how and where to plug it into the build system, using Sauce Connect to give the Sauce VMs access to a running server behind our firewall, and possibly adding it as a step to the deploy process as well.
- Add smoke tests for more pages.  Current setup only hits 3, probably need at least the top 10.
- Add browsers.
