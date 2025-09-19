# 99.  ### Что такое the purpose of renderError?

When the default render function encounters an error then you can use rennderError as an alternative render output. The error will be passed to renderError as the second argument. The example usage of renderError is as below,
     ```javacript
     new Vue({
       render (h) {
         throw new Error('An error')
       },
       renderError (h, err) {
         return h('div', { style: { color: 'red' }}, err.stack)
       }
     }).$mount('#app')
     ```