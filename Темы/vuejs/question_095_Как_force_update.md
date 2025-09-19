# 95.  ### Как force update?

It is extremely rare situation of having to manually force an update despite the fact that no reactive data has changed. i.e, To force the Vue instance to re-render manually. You can do it force update using **vm.$forceUpdate()** API method.

     **Note:**  It does not affect all child components but only the instance itself and child components with inserted slot content.