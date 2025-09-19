# 116. ### Могу ли я use CSS модули for preprocessors?

Yes,You can use preprocessors with CSS Modules. For example, sass-loader can configured in webpack file for sass preprocessor.
     ```javascript
     // webpack.config.js -> module.rules
     {
       test: /\.scss$/,
       use: [
         'vue-style-loader',
         {
           loader: 'css-loader',
           options: { modules: true }
         },
         'sass-loader'
       ]
     }
     ```