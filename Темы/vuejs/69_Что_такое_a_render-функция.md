# 69.  ### Что такое a render-функция?

Render function is a normal function which receives a `createElement` method as it’s first argument used to create virtual nodes. Internally Vue.js' templates actually compile down to render functions at build time. Hence templates are just syntactic sugar of render functions. Let's take an example of simple Div markup and corresponding render function,
     The HTML markup can be written in template tag as below,
     ```javascript
     <template>
           <div :class="{'is-rounded': isRounded}">
            <p>Welcome to Vue render functions</p>
           </div>
     </template>
     ```
     and the compiled down or explicit render function would appear as below,
     ```javascript
     render: function (createElement) {
        return createElement('div', {
          'class': {
              'is-rounded': this.isRounded
          }
        }, [
          createElement('p', 'Welcome to Vue render functions')
        ]);
       },
     ```
     **Note:** The react components are built with render functions in JSX.