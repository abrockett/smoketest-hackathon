# smoketest-hackathon
Hackathon to create smoke tests for top 10 pages using WebdriverIO

To run locally:

- cd into this repo's directory
- java -jar {somewhere}/selenium-server-standalone-2.53.0.jar
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
