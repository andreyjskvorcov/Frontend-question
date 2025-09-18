**useAsyncData** в Nuxt — это специальный composable-хук для асинхронной загрузки данных, который позволяет удобно использовать асинхронные запросы как при серверном рендеринге (SSR), так и на клиенте, обеспечивая кэширование, обработку ошибок и управление состоянием загрузки[1][2][6].

---

### Что такое useAsyncData

useAsyncData предоставляет удобный API для получения данных при инициализации страницы или компонента. Хук запускает асинхронную функцию, возвращает реактивные переменные с состоянием, автоматически кэширует результаты и работает на сервере и клиенте, что особенно удобно для SSR/SSG приложений[1][2][5][6].

---

### Основной синтаксис

```js
const { data, pending, error, refresh } = await useAsyncData(
  'users',
  async () => {
    // Получаем пользователей с API
    return $fetch('https://api.example.com/users');
  }
);
// data — результат запроса (реактивный объект)
// pending — индикатор загрузки
// error — информация об ошибке
// refresh — функция для повторной загрузки данных
```

Эта конструкция позволяет загружать данные до рендера страницы и выводить разные состояния — загрузка, ошибка, готовые данные. Ключ ('users') нужен для кэширования запроса[1][2][5][6].

---

### Примеры использования

#### 1. Загрузка списка постов

```vue
<script setup>
const { posts, pending, error } = await useAsyncData('posts', () =>
  $fetch('https://jsonplaceholder.typicode.com/posts')
);
</script>

<template>
  <div>
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка загрузки: {{ error.message }}</div>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
```

В этом примере запрос выполняется и на сервере при первом SSR-рендере, и на клиенте при переходах по страницам[1][5].

#### 2. Актуализация по параметру (реактивность)

```vue
<script setup>
import { ref, watch } from 'vue';
const userId = ref(1);
const { user, refresh } = await useAsyncData(
  () => `user-${userId.value}`,
  () => $fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
);
watch(userId, () => {
  refresh();
});
</script>
<template>
  <button @click="userId++">Следующий пользователь</button>
  <div v-if="user">{{ user.name }}</div>
</template>
```

Таким образом, useAsyncData автоматически реагирует на изменение зависимости и повторно загружает данные[1].

#### 3. Запуск только если условие

```js
const isEnabled = ref(false);
const { data, refresh } = await useAsyncData(
  'conditional',
  () => $fetch('/api/data'),
  { enabled: isEnabled }
);
```

Запрос происходит только если isEnabled истинен[1].

#### 4. Получение данных по ID маршрута

```vue
<script setup>
const { post, pending, error } = await useAsyncData('post', async () => {
  const id = useRoute().params.id;
  return await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
});
</script>
<template>
  <div v-if="pending">Загрузка...</div>
  <div v-else-if="error">Ошибка: {{ error.message }}</div>
  <div v-else>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>
```

Актуальная практика SSR и корректной обработки состояния данных[5].

---

### Особенности и возможности

- Позволяет кэшировать результаты между сервером и клиентом[6].
- Поддерживает асинхронные эффекты с зависимостями и реактивностью[1].
- Интегрируется с глобальным состоянием через useState.
- Гибко настраивается через параметры ({ enabled, lazy, watch }) и поддерживает множество сценариев как для статической генерации (SSG), так и обычного SSR[1][6].

---

**Практический вывод:**  
useAsyncData — базовый инструмент работы с асинхронными запросами и интеграции данных в Nuxt. Компактный синтаксис, поддержка SSR/CSR, лаконичная обработка ошибок и кэширование делают его мощным решением для современных Vue/Nuxt-проектов[1][6][5][2].

Источники
[1] Как использовать useAsyncData в Nuxt - Антон Ларичев https://landing.stage.purpleschool.purplecode.ru/knowledge-base/article/useasyncdata
[2] Работаем с асинхронностью в Nuxt 3: сравниваем хуки ... https://habr.com/ru/companies/lamoda/articles/868044/
[3] useAsyncData · Nuxt Composables v4 https://nuxt.com/docs/api/composables/use-async-data
[4] Как правильно писать useAsyncData? : r/Nuxt https://www.reddit.com/r/Nuxt/comments/1f1fthm/what_is_the_actual_correct_way_to_write/
[5] Nuxt JS и Vue 3 для SSR приложений https://purpleschool.ru/knowledge-base/article/nuxt-3
[6] Efficient Data Fetching In Nuxt With useAsyncData https://www.debugbear.com/blog/nuxt-useasyncdata
[7] Эффективные методы работы с данными - Антон Ларичев https://landing.stage.purpleschool.purplecode.ru/knowledge-base/nuxt/work-with-data
[8] Data Fetching · Get Started with Nuxt v4 https://nuxt.com/docs/getting-started/data-fetching
[9] Это правильный способ использовать 'useAsyncData'? Я ... https://www.reddit.com/r/Nuxt/comments/10q9wh6/is_this_the_correct_way_to_use_useasyncdata_i/
[10] Fetching and Displaying Data in Nuxt 3 with useAsyncData https://dev.to/blamsa0mine/fetching-and-displaying-data-in-nuxt-3-with-useasyncdata-3056
