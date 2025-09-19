# 132. ### Что такое the принципы for vuex приложение структура?

Vuex enforces below rules to structure any application.
     1. Application-level state is centralized in the store.
     2. The only way to mutate the state is by committing mutations, which are synchronous transactions.
     3. Asynchronous logic should be encapsulated in, and can be composed with actions.
     The project structure for any non-trivial application would be as below,
     <img src="https://github.com/sudheerj/vuejs-interview-questions/blob/master/images/vuex-app-structure.png" width="700" height="500">