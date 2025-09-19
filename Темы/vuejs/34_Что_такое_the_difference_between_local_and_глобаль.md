# 34.  ### Что такое the difference between local and глобальная регистрация в модульной системе?

In **local registration**, you need to create each component in components folder(optional but it is recommended) and import them in another component file components section. Let's say you want to register component A and B in component C, the configuration seems as below,
     ```javascript
     import ComponentA from './ComponentA'
     import ComponentB from './ComponentC'

     export default {
       components: {
         ComponentA,
         ComponentB
       },
       // ...
     }
     ```
     Now both ComponentA and ComponentB can be used inside ComponentC‘s template.

     In **global registration**, you need to export all common or base components in a separate file. But some of the popular bundlers like `webpack` make this process simpler by using `require.context` to globally register base components in the below entry file(one-time).

     ```javascript
     import Vue from 'vue'
     import upperFirst from 'lodash/upperFirst'
     import camelCase from 'lodash/camelCase'

     const requireComponent = require.context(
       // The relative path of the components folder
       './components',
       // Whether or not to look in subfolders
       false,
       // The regular expression used to match base component filenames
       /Base[A-Z]\w+\.(vue|js)$/
     )

     requireComponent.keys().forEach(fileName => {
       // Get component config
       const componentConfig = requireComponent(fileName)

       // Get PascalCase name of component
       const componentName = upperFirst(
         camelCase(
           // Strip the leading `./` and extension from the filename
           fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
         )
       )

       // Register component globally
       Vue.component(
         componentName,
         // Look for the component options on `.default`, which will
         // exist if the component was exported with `export default`,
         // otherwise fall back to module's root.
         componentConfig.default || componentConfig
       )
     })
     ```