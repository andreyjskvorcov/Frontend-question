**useFetch** в Nuxt — это composable-хук для выполнения асинхронных HTTP-запросов, который оборачивает $fetch и автоматически синхронизируется с SSR, кэшированием, статусами загрузки и ошибками. Его можно использовать прямо в `<script setup>` для получения и обновления любых внешних данных[5][2][6].

---

### Основной синтаксис

```js
const { data, pending, error, refresh } = await useFetch(
  'https://api.example.com/data'
);
```

Переменные:

- **data**: результат запроса (реактивный объект)
- **pending**: индикатор загрузки
- **error**: информация о возникшей ошибке
- **refresh**: функция для повторного запроса

---

### Примеры использования

#### 1. Простая загрузка поста

```vue
<script setup>
const { post, error, pending } = await useFetch(
  'https://jsonplaceholder.typicode.com/posts/1'
);
</script>
<template>
  <div v-if="pending">Загрузка...</div>
  <div v-else-if="error">Ошибка: {{ error.message }}</div>
  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>
```

Запрос выполнится на сервере при SSR и на клиенте при навигации, а состояние загрузки и ошибки выводятся прямо в шаблоне[5][8].

#### 2. Динамическая загрузка по параметру

```vue
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = computed(() => route.params.id);
const { post } = await useFetch(
  () => `https://jsonplaceholder.typicode.com/posts/${id.value}`
);
</script>
```

Если параметр маршрута изменится, useFetch автоматически выполнит новый запрос[6].

#### 3. POST-запрос с телом и заголовками

```js
const { data, pending, error } = await useFetch('/api/users', {
  method: 'POST',
  body: { name: 'Новый пользователь' },
  headers: { 'Content-Type': 'application/json' },
});
```

UseFetch поддерживает все методы HTTP и гибко конфигурируется[1][6].

#### 4. Использование ленивой загрузки (lazy) и обновление по событию

```js
const { data, refresh, pending } = await useFetch('/api/data', { lazy: true });
function onClick() {
  refresh();
}
```

Запрос произойдет только после перехода на страницу и явного вызова refresh, что полезно для загрузки по пользовательскому действию[1][6].

---

### Особенности useFetch

- SSR/SSG поддержка: данные доступны до рендера страницы и сохраняются при гидрации на клиенте[2].
- Автоматическое кэширование и дедупликация запросов — повторные запросы с одинаковыми параметрами не приведут к дублирующей загрузке[6].
- Можно управлять заголовками, методами, телом и параметрами запроса через опции.
- Гибко интегрируется с Composition API и может использоваться для любого endpoint, в том числе собственного API Nuxt[5][6].

---

**Практический вывод:**  
useFetch — ключевой инструмент для асинхронных запросов в Nuxt, идеально подходит для SSR/CSR, позволяет элегантно управлять состояниями и удобно интегрируется в компоненты благодаря реактивности Vue[5][2][6][8][1].

Источники
[1] Работа с useFetch в Nuxt https://webkyrs.info/post/rabota-s-usefetch-v-nuxt
[2] Работаем с асинхронностью в Nuxt 3: сравниваем хуки ... https://habr.com/ru/companies/lamoda/articles/868044/
[3] Метод useFetch из документации ничего не делает : r/Nuxt https://www.reddit.com/r/Nuxt/comments/zmivxx/usefetch_method_from_the_docs_does_nothing/
[4] Nuxt JS с нуля / #4 – Обработка данных по URL https://www.youtube.com/watch?v=ExUgeOKCLAw
[5] Руководство по получению данных с Fetch в Nuxt https://landing.stage.purpleschool.purplecode.ru/knowledge-base/article/nuxt-fetch
[6] useFetch · Nuxt Composables v4 https://nuxt.com/docs/api/composables/use-fetch
[7] как в nuxt 3 сделать хуки useFetch многоразовыми? https://www.reddit.com/r/Nuxt/comments/182ynqa/how_in_nuxt_3_make_usefetch_hooks_reusable/
[8] Nuxt JS и Vue 3 для SSR приложений https://purpleschool.ru/knowledge-base/article/nuxt-3
[9] Создание серверных приложений на Vue с помощью ... https://purpleschool.ru/knowledge-base/article/nuxt
[10] Контекст в Vue/Nuxt: осознать, не терять и беречь / Хабр https://habr.com/ru/articles/812145/
