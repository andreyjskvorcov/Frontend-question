# 27.  ### Что такое пропсы?

Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. You can pass those list of values as props option and use them as similar to data variables in template.
     ```javascript
     Vue.component('todo-item', {
       props: ['title'],
       template: '<h2>{{ title }}</h2>'
     })
     ```
     Once the props are registered, you can pass them as custom atrtributes.
     ```javascript
     <todo-item title="Learn Vue conceptsnfirst"></todo-item>
     ```