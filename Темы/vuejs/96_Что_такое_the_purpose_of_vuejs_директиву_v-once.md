# 96.  ### Что такое the purpose of vuejs директиву v-once?

If you want to render `a lot of static content` then you need to make sure it only evaluated once and then cached thereafter. In this case, you can use `v-once` directive by wrapping at the root level. The example usage of v-once directive would be as below,
     ```javascript
     Vue.component('legal-terms', {
       template: `
         <div v-once>
           <h1>Legal Terms</h1>
           ... a lot of static content goes here...
         </div>
       `
     })
     ```

     **Note:** It is recommended not to overuse unless there is slow rendering due to lot of static content.