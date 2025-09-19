# 106. ### Что такое asset url transform правила?

Below are the list of Asset URL transform rules
     1. ** Absolute path**: If the URL is an absolute path (for example, /images/loader.png)then it will be preserved as-is.
     2. ** Relative path**: If the URL starts with `.` (for example, ./images/loader.png) then it will be interpreted as a relative module request and resolved based on the folder structure on your file system.
     3. ** URLs starts with ~ symbol **: If the URL starts with `~` symbol(for example, ./some-node-package/loader.png) then it is interpreted as a module request. This way it can reference assets inside node modules too.
     4. ** URLs starts with @ symbol**: If the URL starts with `@` symbol then it is interpreted as a module request. This is useful if your webpack config has an alias for @, which by default points to `/src` path.