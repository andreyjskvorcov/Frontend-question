# 31.  ### Что такое слоты?

Vue implements a content distribution API using the <slot> element to serve as distribution outlets for content created after after the current Web Components spec draft. Let's create an alert component with slots for content insertion,
     ```javascript
     Vue.component('alert', {
       template: `
         <div class="alert-box">
           <strong>Error!</strong>
           <slot></slot>
         </div>
       `
     })
     ```
     Now you can insert dynamic content as below,
     ```javascript
     <alert>
       There is an issue with in application.
     </alert>
     ```