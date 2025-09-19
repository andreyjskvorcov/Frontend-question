# 105. ### Как configure vue loader в webpack?

Vue Loader's configuration is a bit different from other loaders by adding Vue Loader's plugin to your webpack config. The vue loader plugin is required for cloning any other rules(js and css rules) defined and applying them to the corresponding language blocks(<script> and <style>) in .vue files.
     For example, the simple demonistration of webpack configuration for vue loader would be as below,
     ```javascript
     // webpack.config.js
     const VueLoaderPlugin = require('vue-loader/lib/plugin')

     module.exports = {
       mode: 'development',
       module: {
         rules: [
           {
             test: /\.vue$/,
             loader: 'vue-loader'
           },
           // this will apply to both plain `.js` files and `<script>` blocks in `.vue` files
           {
             test: /\.js$/,
             loader: 'babel-loader'
           },
           // this will apply to both plain `.css` files and `<style>` blocks in `.vue` files
           {
             test: /\.css$/,
             use: [
               'vue-style-loader',
               'css-loader'
             ]
           }
         ]
       },
       plugins: [
         // make sure to include the plugin for cloning and mapping them to respective language blocks
         new VueLoaderPlugin()
       ]
     }
     ```