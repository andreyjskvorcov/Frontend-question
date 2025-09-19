# 71.  ### How Можете ли вы write duplicate virtual nodes in a компонент?

All virtual nodes(VNodes) in the component tree must be unique.i.e, You can't write duplicated nodes in a straightforward way. If you want to duplicate the same element/component many times then you should use factory function.
     The below render function is invalid where you are trying to duplicate h1 element 3 times,
     ```javascript
     render: function (createElement) {
       var myHeadingVNode = createElement('h1', 'This is a Virtual Node')
       return createElement('div', [
         myHeadingVNode, myHeadingVNode, myHeadingVNode
       ])
     }
     ```
     You can make duplicates with factory function,
     ```javascript
     render: function (createElement) {
       return createElement('div',
         Array.apply(null, { length: 3 }).map(function () {
           return createElement('h1', 'This is a Virtual Node')
         })
       )
     }
     ```