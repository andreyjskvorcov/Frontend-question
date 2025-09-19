# 166. ### Что такое различия between мутации and действия?

Actions are similar to mutations, but there are two main differences,
     1. Mutations perform mutations on the state, actions commit mutations.
     2. Actions can contain arbitrary asynchronous operations unlike mutations.