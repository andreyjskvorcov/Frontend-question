# 90.  ### Как configure vuejs в webpack?

You can configure vueJS in webpack using alias as below,

        ```javascript
        module.exports = {
          // ...
          resolve: {
            alias: {
              'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
            }
          }
        }
        ```