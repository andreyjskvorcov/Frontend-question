# 20.  ### Что такое модификаторы клавиш?

Vue supports key modifiers on `v-on` for handling keyboard events. Let's take an example of keyup event with enter keycode.
     ```html
     <!-- only call `vm.show()` when the `keyCode` is 13 -->
     <input v-on:keyup.13="show">
     ```
     Remembering all the key codes is really difficult. It supports the full list of key codes aliases
     1. .enter
     2. .tab
     3. .delete (captures both “Delete” and “Backspace” keys)
     4. .esc
     5. .space
     6. .up
     7. .down
     8. .left
     9. .right

     Now the above keyup code snippet can be written with aliases as follows,
     ```javascript
     <input v-on:keyup.enter="submit">
     // (OR)
     <!-- with shorthand notation-->
     <input @keyup.enter="submit">
     ```
     **The use of keyCode events is deprecated and may not be supported in new browsers.**