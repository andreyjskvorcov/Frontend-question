# 30.  ### Как implement model on custom input компоненты?

The custom events can also be used to create custom inputs that work with v-model. The <input> inside the component must follow below rules,
     1. Bind the value attribute to a value prop
     2. On input, emit its own custom input event with the new value.
     Let's take a custom-input component as an example,
     ```javascript
     Vue.component('custom-input', {
       props: ['value'],
       template: `
         <input
           v-bind:value="value"
           v-on:input="$emit('input', $event.target.value)"
         >
       `
     })
     ```
     Now you can use `v-model` with this component,
     ```javascript
     <custom-input v-model="searchInput"></custom-input>
     ```