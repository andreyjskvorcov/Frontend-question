# 61.  ### Что такое custom options merging стратегии?

Vue uses the default strategy which overwrites the existing value while custom options are merged. But if you want a custom option merged using custom login then you need to attach a function to `Vue.config.optionMergeStrategies`
     For the example, the structure of `myOptions` custom option would be as below,
     ```javascript
     Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
       // return mergedVal
     }
     ```
     Let's take below Vuex 1.0 merging strategy as an advanced example,
     ```javascript
     const merge = Vue.config.optionMergeStrategies.computed
     Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
       if (!toVal) return fromVal
       if (!fromVal) return toVal
       return {
         getters: merge(toVal.getters, fromVal.getters),
         state: merge(toVal.state, fromVal.state),
         actions: merge(toVal.actions, fromVal.actions)
       }
     }
     ```