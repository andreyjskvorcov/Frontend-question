# 73.  ### Что такое функциональные компоненты?

The functional components are just simple functions to create simple components just by passing a context. Every functional component follows two rules,
      1. **Stateless:** It doesn’t keep any state by itself
      2. **Instanceless:** It has no instance, thus no this

     You need to define `functional: true` to make it functional. Let's take an example of functional components,
     ```javascript
     Vue.component('my-component', {
       functional: true,
       // Props are optional
       props: {
         // ...
       },
       // To compensate for the lack of an instance,
       // we are now provided a 2nd context argument.
       render: function (createElement, context) {
         // ...
       }
     })
     ```
     **Note:** The functional components are quite popular in React community too.