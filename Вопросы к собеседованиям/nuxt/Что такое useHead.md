**useHead** в Nuxt — это composable-функция, которая позволяет программно и реактивно управлять содержимым тега `<head>` на страницах приложения. С помощью useHead можно задавать динамические заголовки, мета-теги, ссылки, скрипты и другие элементы, создавая SEO-оптимизированную и уникальную информацию для каждой страницы[1][2][3].

---

### Что такое useHead

useHead обеспечивает управление метаданными страницы (title, meta, link, script и пр.) в рамках компонентов или страниц Vue/Nuxt. Это позволяет создавать уникальные заголовки, описание, ключевые слова и прочее, а также добавлять любые другие нужные теги, не редактируя статичный HTML[1][3].

---

### Синтаксис

```ts
useHead({
  title: 'Заголовок страницы',
  meta: [
    { name: 'description', content: 'Описание страницы для SEO' },
    { name: 'keywords', content: 'ключ,слова,страницы' },
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  script: [{ innerHTML: 'console.log("Hello world")' }],
  bodyAttrs: {
    class: 'page-body',
  },
});
```

---

### Примеры использования

#### 1. Простое указание заголовка и мета-тегов

```vue
<script setup>
useHead({
  title: 'Моя страница',
  meta: [
    { name: 'description', content: 'Описание для моей страницы' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
});
</script>

<template>
  <h1>Контент страницы</h1>
</template>
```

---

#### 2. Динамический заголовок с шаблоном

```vue
<script setup>
const pageTitle = ref('Главная');

useHead({
  title: pageTitle.value,
  titleTemplate: (title) => (title ? `${title} - Мой сайт` : 'Мой сайт'),
});
</script>

<template>
  <h1>{{ pageTitle }}</h1>
</template>
```

---

#### 3. Добавление favicon и скрипта

```vue
<script setup>
useHead({
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  script: [{ src: 'https://example.com/script.js', defer: true }],
});
</script>
```

---

#### 4. Реактивные мета-теги

```vue
<script setup>
const description = ref('Описание страницы');

useHead(() => ({
  meta: [{ name: 'description', content: description.value }],
}));
</script>
```

Если значение description изменится, мета-тег обновится автоматически[3][1][2].

---

### Особенности

- Управляет заголовками и мета-тегами динамически и реактивно.
- Работает как на клиенте, так и при серверном рендеринге.
- Поддерживает шаблоны заголовков для универсальных названий страниц.
- Можно задавать любые теги `<head>`, включая скрипты, стили и атрибуты html/body.
- Интегрируется с Vue Composition API и Unhead[3][6].

---

**Итог:**  
useHead — удобный и мощный инструмент для настройки SEO и метаданных в Nuxt, позволяющий эффективно управлять содержимым `<head>` в реактивном и программном стиле с полной поддержкой Vue/Nuxt[1][3][2].

Источники
[1] useHead · Nuxt Composables https://nuxt-ru.vercel.app/docs/api/composables/use-head
[2] Работа с SEO и head в Nuxt https://webkyrs.info/post/rabota-s-seo-i-head-v-nuxt
[3] useHead · Nuxt Composables v4 https://nuxt.com/docs/api/composables/use-head
[4] useHead недоступен в компонентах? : r/Nuxt https://www.reddit.com/r/Nuxt/comments/19eg453/usehead_not_available_in_components/
[5] Использование scripts в Nuxt - Антон Ларичев https://landing.stage.purpleschool.purplecode.ru/knowledge-base/article/nuxt-scripts
[6] SEO и Meta в Nuxt 3 проекте https://mydev.fun/nuxt/nuxt3-seo-meta
[7] Как в Nuxt добавлять мета тэги и тэги в область head страниц https://webkyrs.info/page/kak-v-nuxt-dobavlyat-meta-tegi-i-tegi-v-oblast-head-stranits
[8] SEO and Meta · Get Started with Nuxt v4 https://nuxt.com/docs/getting-started/seo-meta
[9] Определить метаданные страницы с асинхронными ... https://www.reddit.com/r/Nuxt/comments/14ifodr/definepagemeta_with_asyncserver_data/
[10] Глубокое погружение в Nuxt.js https://nuancesprog.ru/p/21901/
