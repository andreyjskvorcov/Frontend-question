# 32.  ### Что такое глобальная регистрация в компонентах?

The components which are globally registered can be used in the template of any root Vue instance (new Vue) created after registration. In the global registration, the components created using Vue.component as below,
     ```javascript
     Vue.component('my-component-name', {
       // ... options ...
     })
     ```
     Let's take multiple components which are globally registered in the vue instance,
     ```javascript
     Vue.component('component-a', { /* ... */ })
     Vue.component('component-b', { /* ... */ })
     Vue.component('component-c', { /* ... */ })

     new Vue({ el: '#app' })
     ```
     The above components can be used in the vue instance,
     ```javascript
     <div id="app">
       <component-a></component-a>
       <component-b></component-b>
       <component-c></component-c>
     </div>
     ```
     Remember that the components can be used in subcomponents as well.