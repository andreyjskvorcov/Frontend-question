# 66.  ### Как pass множественные values to a директива?

A directive can take any valid javascript expression. So if you want to pass multiple values then you can pass in a JavaScript object literal.
     Let's pass object literal to an avatar directive as below
     ```html
     <div v-avatar="{ width: 500, height: 400, url: 'path/logo', text: 'Iron Man' }"></div>
     ```
     Now let us configure avatar directive globally,
     ```javascript
     Vue.directive('avatar', function (el, binding) {
       console.log(binding.value.width) // 500
       console.log(binding.value.height)  // 400
       console.log(binding.value.url) // path/logo
       console.log(binding.value.text)  // "Iron Man"
     })
     ```