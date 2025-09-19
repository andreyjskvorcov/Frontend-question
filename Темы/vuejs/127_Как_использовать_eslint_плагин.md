# 127. ### Как использовать eslint плагин?

The official `eslint-plugin-vue` supports linting both the template and script parts of Vue single file components. You can configure plugin in your ESLint config,
     ```javascript
     // .eslintrc.js
     module.exports = {
       extends: [
         "plugin:vue/essential"
       ]
     }
     ```
     You can run linter on particular component as below,
     ```javascript
     eslint --ext js,vue MyComponent.vue
     ```