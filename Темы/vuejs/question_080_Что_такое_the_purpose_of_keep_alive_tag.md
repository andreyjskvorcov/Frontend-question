# 80.  ### Что такое the purpose of keep alive tag?

Keep-alive tag is an abstract component used to preserve component state or avoid re-rendering. When you wrapped <keep-alive> tag around a dynamic component,  it caches the inactive component instances without destroying them.
     Let's see the example usage of it,
     ```javascript
     <!-- Inactive components will be cached! -->
     <keep-alive>
       <component v-bind:is="currentTabComponent"></component>
     </keep-alive>
     ```
     When there are multiple conditional children, it requires that only one child is rendered at a time.

     ```javascript
     <!-- multiple conditional children -->
     <keep-alive>
       <comp-a v-if="a > 1"></comp-a>
       <comp-b v-else></comp-b>
     </keep-alive>
     ```
     **Note:** Remember that keep-alive tag doesn’t render a DOM element itself, and doesn’t show up in the component parent chain.