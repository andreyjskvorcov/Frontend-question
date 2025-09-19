# 129. ### Что такое CSS extraction?

CSS Extraction is used to extract all the processed CSS in all Vue components into a single CSS file. For webpack4, you need to install below npm command,
`javascript
     npm install -D mini-css-extract-plugin
     `
You can configure this plugin in webpack as below,
```javascript
// webpack.config.js
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

     module.exports = {
       // other options...
       module: {
         rules: [
           // ... other rules omitted
           {
             test: /\.css$/,
             use: [
               process.env.NODE_ENV !== 'production'
                 ? 'vue-style-loader'
                 : MiniCssExtractPlugin.loader,
               'css-loader'
             ]
           }
         ]
       },
       plugins: [
         // ... Vue Loader plugin omitted
         new MiniCssExtractPlugin({
           filename: 'style.css'
         })
       ]
     }
     ```
