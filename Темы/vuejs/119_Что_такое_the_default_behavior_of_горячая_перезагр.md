# 119. ### Что такое the default behavior of горячая перезагрузка?

Hot Reload is always enabled except below situations:

     1. webpack target is node (SSR)
     2. webpack minifies the code
     3. process.env.NODE_ENV === 'production'