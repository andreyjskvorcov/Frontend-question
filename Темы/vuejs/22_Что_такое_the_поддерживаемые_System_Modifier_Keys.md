# 22.  ### Что такое the поддерживаемые System Modifier Keys?

Vue supports below modifiers to trigger mouse or keyboard event listeners when the corresponding key is pressed,
     1. .ctrl
     2. .alt
     3. .shift
     4. .meta

     Lets take an example of control modifier with click event,
     ```javascript
     <!-- Ctrl + Click -->
     <div @click.ctrl="doSomething">Do something</div>
     ```