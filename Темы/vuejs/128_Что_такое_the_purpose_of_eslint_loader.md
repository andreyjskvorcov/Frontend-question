# 128. ### Что такое the purpose of eslint loader?

You can use `eslint-loader` for *.vue files in order to automatically linted on save during development. It can be installed as npm module,
     ```javascript
     npm install -D eslint eslint-loader
     ```
     After that you need to add it as pre-loader,
     ```javascript
     // webpack.config.js
     module.exports = {
       // ... other options
       module: {
         rules: [
           {
             enforce: 'pre',
             test: /\.(js|vue)$/,
             loader: 'eslint-loader',
             exclude: /node_modules/
           }
         ]
       }
     }
     ```