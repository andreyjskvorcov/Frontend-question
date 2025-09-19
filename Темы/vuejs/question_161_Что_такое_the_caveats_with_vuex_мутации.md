# 161. ### Что такое the caveats with vuex мутации?

Since a Vuex store's state is made reactive by Vue, the same reactivity caveats of vue will apply to vuex mutations. These are the rules should be followed for vuex mutations,
     1. It is recommended to initialize store's initial state with all desired fields upfront
     2. Add new properties to state Object either by set method or object spread syntax
     ```javascript
     Vue.set(stateObject, 'newProperty', 'John')
     ```
     (OR)
     ```javascript
     state.stateObject = { ...state.stateObject, newProperty: 'John' }
     ```