# 120. ### Как disable горячая перезагрузка explicitly?

You can use `hotReload: false` option to disable the Hot Reload explicitly. It can be configured as below,
     ```javascript
     module: {
       rules: [
         {
           test: /\.vue$/,
           loader: 'vue-loader',
           options: {
             hotReload: false // disables Hot Reload
           }
         }
       ]
     }
     ```