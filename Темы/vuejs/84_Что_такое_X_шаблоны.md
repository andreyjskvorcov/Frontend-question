# 84.  ### Что такое X шаблоны?

Apart from regular templates and inline templates, you can also define templates using a script element with the type `text/x-template` and then referencing the template by an id.
     Let's create a x-template for simple use case as below,
     ```javascript
     <script type="text/x-template" id="script-template">
       <p>Welcome to X-Template feature</p>
     </script>
     ```
     Now you can define the template using reference id,
     ```javascript
     Vue.component('x-template-example', {
       template: '#script-template'
     })
     ```