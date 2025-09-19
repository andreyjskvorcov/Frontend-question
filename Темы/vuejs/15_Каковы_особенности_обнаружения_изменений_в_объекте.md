# 15.  ### Каковы особенности обнаружения изменений в объекте?

Vue не может определить удаление и добавление новых свойств у объекта. Давайте рассмотрим пример:
     ```javascript
     var vm = new Vue({
       data: {
         user: {
           name: 'John'
         }
       }
     })

     // `vm.user.name` реактивное свойство

     vm.email = john@email.com // `vm.email` не реактивное
     ```
     Для того чтобы реализовать этот сценарий мы можем использовать метод Vue.set(object, key, value) или Object.assign(),
     ```javascript
     Vue.set(vm.user, 'email', john@email.com);
     // или
     vm.user = Object.assign({}, vm.user, {
       email: john@email.com
     })
     ```