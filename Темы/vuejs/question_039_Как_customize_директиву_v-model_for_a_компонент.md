# 39.  ### Как customize директиву v-model for a компонент?

The v-model directive on a component uses **value** as the prop and **input** as the event, but some input types such as `checkboxes` and `radio buttons` may need to use the value attribute for a server side value. In this case, it is preferred to customize model directive. Let's take an example of checkbox component,
     ```javascript
     Vue.component('custom-checkbox', {
       model: {
         prop: 'checked',
         event: 'change'
       },
       props: {
         checked: Boolean
       },
       template: `
         <input
           type="checkbox"
           v-bind:checked="checked"
           v-on:change="$emit('change', $event.target.checked)"
         >
       `
     })
     ```
     Now you can use v-model on this customized component as below,
     ```javascript
     <custom-checkbox v-model="selectFramework"></custom-checkbox>
     ```
     The selectFramework property will be passed to the checked prop and same property will be updated when custom checkbox component emits a change event with a new value.