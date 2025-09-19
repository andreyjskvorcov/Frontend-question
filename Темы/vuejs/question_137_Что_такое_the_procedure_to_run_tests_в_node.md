# 137. ### Что такое the procedure to run tests в node?

By proper mocking, you can bundle tests with webpack and run them on node without having depenceny on Browser API.  It involves 2 steps,
     1. **Create webpack config:** Create webpack config with proper .babelrc
     ```javscript
     // webpack.config.js
     module.exports = {
       entry: './test.js',
       output: {
         path: __dirname,
         filename: 'test-bundle.js'
       },
       module: {
         loaders: [
           {
             test: /\.js$/,
             loader: 'babel-loader',
             exclude: /node_modules/
           }
         ]
       }
     }
     ```
     2. ** Run testcases:** First you need to bundle and then run them using mocha as below,
     ```javascript
     webpack
     mocha test-bundle.js
     ```