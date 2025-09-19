# 33.  ### Почему do you need локальная регистрация?

Due to global registration, even if you don't use the component it could still be included in your final build. So it will create unnecessary javascript in the application. This can be avoided using local registration with the below steps,
     1. First you need to define your components as plain JavaScript objects
     ```javascript
     var ComponentA = { /* ... */ }
     var ComponentB = { /* ... */ }
     var ComponentC = { /* ... */ }
     ```
     Locally registered components will not be available in sub components. In this case, you need to add them in components section
     ```javascript
     var ComponentA = { /* ... */ }

     var ComponentB = {
       components: {
         'component-a': ComponentA
       },
       // ...
     }
     ```
     2. You can use the components in the components section of the vue instance,
     ```javascript
     new Vue({
       el: '#app',
       components: {
         'component-a': ComponentA,
         'component-b': ComponentB
       }
     })
     ```