# 54.  ### Что такое плагины and their различные services?

Plugins provides global-level functionality to Vue application. The plugins provide various services,
     1. Add some global methods or properties. For example, vue-custom-element
     2. Add one or more global assets (directives, filters and transitions). For example, vue-touch
     3. Add some component options by global mixin. For example, vue-router
     4. Add some Vue instance methods by attaching them to Vue.prototype.
     5. A library that provides an API of its own, while at the same time injecting some combination of the above. For example, vue-router