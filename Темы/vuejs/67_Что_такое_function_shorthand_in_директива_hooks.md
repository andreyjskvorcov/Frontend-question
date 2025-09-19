# 67.  ### Что такое function shorthand in директива hooks?

In few cases, you may want the same behavior on `bind` and `update` hooks irrespective of other hooks. In this situation you can use function shorthand,
     ```javascript
     Vue.directive('theme-switcher', function (el, binding) {
       el.style.backgroundColor = binding.value
     })
     ```