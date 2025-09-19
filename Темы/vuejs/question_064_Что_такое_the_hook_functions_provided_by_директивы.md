# 64.  ### Что такое the hook functions provided by директивы?

A directive object can provide several hook functions,
     1. bind: This occurs once the directive is attached to the element.
     2. inserted: This hook occurs once the element is inserted into the parent DOM.
     3. update: This hook is called when the element updates, but children haven't been updated yet.
     4. componentUpdated: This hook is called once the component and the children have been updated.
     5. unbind: This hook is called only once when the directive is removed.

     **Note:** There are several arguments that can be passed to the above hooks.