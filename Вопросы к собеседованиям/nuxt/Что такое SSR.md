**Server-Side Rendering (SSR)** в Nuxt — это технология, при которой страница рендерится на сервере, и уже готовый HTML отправляется клиенту. Это дает преимущества в SEO, ускоряет первый показ контента и снижает нагрузку на браузер пользователя. Nuxt изначально поддерживает SSR, существенно облегчая создание универсальных (universal) Vue-приложений с серверным рендерингом[1][5][3].

---

### Что такое SSR в Nuxt

SSR позволяет серверу выполнять Vue-компоненты и асинхронные запросы, формировать готовую страницу с контентом и отдать её браузеру. Клиент, получив HTML, выполняет гидрацию — связывает события с уже загруженной разметкой, чтобы приложение стало интерактивным[5][6].

---

### Преимущества SSR

- **Ускоренная загрузка страницы:** Пользователь видит контент быстрее, так как браузеру не нужно ждать загрузки и выполнения JavaScript для первого рендера.
- **Оптимизация для SEO:** Поисковые роботы получают полный HTML, легко индексируют страницы.
- **Доступность:** Помогает поддерживать пользователей со вспомогательными технологиями.
- **Улучшенная производительность:** Особенно на медленных устройствах и сетях[5][6].

---

### Конфигурация SSR в Nuxt

В `nuxt.config.ts` включается или отключается SSR:

```ts
export default defineNuxtConfig({
  ssr: true, // Включен серверный рендеринг (по умолчанию)
});
```

Чтобы отключить SSR и использовать исключительно клиентский рендеринг:

```ts
export default defineNuxtConfig({
  ssr: false,
});
```

---

### Работа с данными

Для асинхронной загрузки данных перед рендерингом используются хуки `useAsyncData` и `useFetch`. Они гарантируют загрузку данных на сервере до передачи HTML клиенту.

```vue
<script setup>
const { post } = await useAsyncData('post', async () => {
  const id = useRoute().params.id;
  return await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
});
</script>

<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>
```

---

### Гибкие режимы рендеринга

Nuxt поддерживает:

- **SSR (Universal):** Рендеринг на сервере, динамическое создание страниц.
- **SSG (Static Site Generation):** Сайт генерируется заранее на этапе сборки.
- **SPA:** Только клиентский рендеринг, без SSR.

Конфигурация позволяет гибко выбирать режим под задачу[3][5].

---

### Пограничный рендеринг (Edge-Side Rendering)

Nuxt совместно с Nitro и CDN может выполнять рендеринг ближе к пользователю на пограничных серверах (ESR), снижая задержку и ускоряя загрузку[4].

---

**Итог:**  
SSR в Nuxt — мощный механизм для быстрой загрузки и SEO-оптимизации сайтов, при этом сохраняя полноценный функционал и интерактивность SPA благодаря гидрации на клиенте[3][5][6].

Источники
[1] Он вам не SSR. Nuxt — больше, чем Server-Side Render ... https://habr.com/ru/articles/888356/
[2] Рендеринг на стороне сервера (SSR) https://ru.vuejs.org/guide/scaling-up/ssr
[3] Nuxt JS и Vue 3 для SSR приложений https://purpleschool.ru/knowledge-base/article/nuxt-3
[4] Режимы рендеринга · Концепции Nuxt - Vercel https://nuxt-ru.vercel.app/docs/guide/concepts/rendering
[5] Введение · Начните работать с Nuxt https://nuxt-ru.vercel.app/docs
[6] Server-Side Rendering (SSR): Когда сервер берет ... https://habr.com/ru/sandbox/235584/
[7] Nuxt.js: Полное руководство для начинающих https://icoder.uz/veb-razrabotka/o0w3cbgrffg-nuxtjs-beginner-guide/
[8] Что мне нужно знать перед тем, как начать работу с Nuxt? https://www.reddit.com/r/vuejs/comments/1eu0j0w/what_should_i_know_before_getting_started_with/
[9] Что такое SSR и как его реализовать — краткий гайд https://result.school/roadmap/frontend/article/chto-takoe-ssr-i-kak-ego-realizovat-%E2%80%94-kratkij-gajd
[10] Знакомство с серверным API Nuxt https://webkyrs.info/page/znakomstvo-s-servernim-api-nuxt
