# 144. ### Что такое the различия of хранилище vuex and plain global object?

Below are the two major differences between vuex store and plain global object
     1. **Vuex stores are reactive:** If the store's state changes then vue components will reactively and efficiently get updated
     2. **Cannot directly mutate the store's state:** The store's state is changed by explicitly committing mutations to ensure that every state change leaves a track-able record for tooling purpose