# 126. ### Как apply linting for css?

The stylelint linter supports linting style parts of Vue single file components. You can run linter on particular vue file as below
     ```javascript
     stylelint MyComponent.vue
     ```
     Other option is configuring stylelint-webpack-plugin in webpack. It can be configured as a dev dependency.
     ```javascript
     // webpack.config.js
     const StyleLintPlugin = require('stylelint-webpack-plugin');
     module.exports = {
       // ... other options
       plugins: [
         new StyleLintPlugin({
           files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
         })
       ]
     }
     ```