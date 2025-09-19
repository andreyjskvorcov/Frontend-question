# 25.  ### Что такое the поддерживаемые modifiers on model?

There are three modifiers supported for v-model directive.

     **1. lazy:** By default, v-model syncs the input with the data after each input event. You can add the lazy modifier to instead sync after change events.
     ```javascript
     <!-- synced after "change" instead of "input" -->
     <input v-model.lazy="msg" >
     ```
     **2. number:** If you want user input to be automatically typecast as a number, you can add the number modifier to your v-model. Even with type="number", the value of HTML input elements always returns a string. So, this typecast modifier is required.
     ```javascript
     <input v-model.number="age" type="number">
     ```
     **3. trim:** If you want whitespace from user input to be trimmed automatically, you can add the trim modifier to your v-model.
     ```javascript
     <input v-model.trim="msg">
     ```