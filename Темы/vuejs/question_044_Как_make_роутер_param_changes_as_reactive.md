# 44.  ### Как make роутер param changes as reactive?

When you navigate from one URL to other(mapped with a single component) using routes with params then the same component instance will be reused. Even though it is more efficient than destroying the old instance and then creating a new one, the lifecycle hooks of the component will not be called. This problem can be solved using either of the below approaches,
     1. Watch the $route object:
     ```javascript
     const User = {
       template: '<div>User {{ $route.params.name }} </div>',
       watch: {
         '$route' (to, from) {
           // react to route changes...
         }
       }
     }
     ```
     2. Use beforeRouteUpdate navigation guard: This is only available since 2.2 version.
     ```javascript
     const User = {
       template: '<div>User {{ $route.params.name }} </div>',
       beforeRouteUpdate (to, from, next) {
         // react to route changes and then call next()
       }
     }
     ```
     Note that the beforeRouteEnter guard does NOT have access to `this`. Instead you can pass a callback to `next` to access the vm instance.