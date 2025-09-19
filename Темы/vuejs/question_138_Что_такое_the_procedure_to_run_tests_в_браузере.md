# 138. ### Что такое the procedure to run tests в браузере?

Below are the steps to run tests in real browser,
     1. Install `mocha-loader`.
     2. Configure webpack config entry point to 'mocha-loader!babel-loader!./test.js'.
     3. Start webpack-dev-server using the config.
     4. Go to localhost:8080/webpack-dev-server/test-bundle to see the test result