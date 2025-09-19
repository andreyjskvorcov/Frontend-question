# 81.  ### Что такое асинхронные компоненты?

In large applications, we may need to divide the app into smaller chunks and only load a component from the server when it’s needed. To make this happen, Vue allows you to define your component as a factory function that asynchronously resolves your component definition. These components are known as async component.
     Let's see an example of async component using webpack code-splitting feature,
     ```javascript
     Vue.component('async-webpack-example', function (resolve, reject) {
       // Webpack automatically split your built code into bundles which are loaded over Ajax requests.
       require(['./my-async-component'], resolve)
     })
     ```
     Vue will only trigger the factory function when the component needs to be rendered and will cache the result for future re-renders