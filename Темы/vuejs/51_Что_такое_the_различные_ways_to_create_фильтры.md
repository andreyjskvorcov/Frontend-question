# 51.  ### Что такое the различные ways to create фильтры?

You can define filters in two ways,
     1. **Local filters:**
     You can define local filters in a component’s options. In this case, filter is applicable to that specific component.
     ```javascript
     filters: {
       capitalize: function (value) {
         if (!value) return ''
         value = value.toString()
         return value.charAt(0).toUpperCase() + value.slice(1)
       }
     }
     ```
     2. **Global filters:**
     You can also define a filter globally before creating the Vue instance. In this case, filter is applicable to all the components with in the vue instance,
     ```javascript
     Vue.filter('capitalize', function (value) {
       if (!value) return ''
       value = value.toString()
       return value.charAt(0).toUpperCase() + value.slice(1)
     })

     new Vue({
       // ...
     })
     ```