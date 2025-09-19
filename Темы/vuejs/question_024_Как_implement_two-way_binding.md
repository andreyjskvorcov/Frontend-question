# 24.  ### Как implement two-way binding?

You can use the `v-model` directive to create two-way data bindings on form input, textarea, and select elements. Lets take an example of it using input component,
     ```javascript
     <input v-model="message" placeholder="Enter input here">
     <p>The message is: {{ message }}</p>
     ```
     Remember, v-model will ignore the initial `value`, `checked` or `selected` attributes found on any form elements. So it always use the Vue instance data as the source of truth.