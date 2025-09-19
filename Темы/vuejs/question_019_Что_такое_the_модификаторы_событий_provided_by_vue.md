# 19.  ### Что такое the модификаторы событий provided by vue?

Normally, javascript provides event.preventDefault() or event.stopPropagation() inside event handlers. You can use methods provided by vue, but these methods are meant for data logic instead of dealing with DOM events. Vue provides below event modifiers for v-on and these modifiers are directive postfixes denoted by a dot.
     1. .stop
     2. .prevent
     3. .capture
     4. .self
     5. .once
     6. .passive
     
     Let's take an example of stop modifier,
     ```html
     <!-- the click event's propagation will be stopped -->
     <a v-on:click.stop="methodCall"></a>
     ```
     You can also chain modifiers as below,
     ```html
     <!-- modifiers can be chained -->
     <a v-on:click.stop.prevent="doThat"></a>
     ```