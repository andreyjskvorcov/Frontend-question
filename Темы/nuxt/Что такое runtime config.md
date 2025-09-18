**Runtime Config** в Nuxt — это механизм управления конфигурационными параметрами и переменными окружения, которые доступны во время выполнения приложения (runtime), а не только на этапе сборки. Он позволяет безопасно хранить секреты и настраиваемые параметры, разделяя их на публичные (доступны на клиенте и сервере) и приватные (только на сервере)[2][3].

---

### Что такое Runtime Config

Runtime Config — это объект конфигурации, который можно определить в `nuxt.config.ts` в секции `runtimeConfig`. Значения этой конфигурации автоматически подтягиваются из переменных окружения и могут использоваться в любом месте приложения через хук `useRuntimeConfig()`[2][3].

---

### Основной синтаксис и объявление

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    // Приватные переменные — доступны только на сервере
    apiSecret: '',

    public: {
      // Публичные — доступны и на клиенте, и на сервере
      apiBase: '',
    },
  },
});
```

В `.env` файле переменные объявляются так:

```
NUXT_PUBLIC_API_BASE=https://api.example.com
API_SECRET=superSecretValue
```

---

### Примеры использования

#### 1. Получение конфигурации в коде

```ts
const config = useRuntimeConfig();
console.log(config.public.apiBase); // https://api.example.com
console.log(config.apiSecret); // Доступно только на сервере
```

---

#### 2. Использование в запросах API

```ts
const config = useRuntimeConfig();
const data = await $fetch(`${config.public.apiBase}/users`);
```

Так URL API меняется в зависимости от окружения (development, production)[3].

---

#### 3. Использование в плагинах

```ts
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiBase;
  // Используем apiUrl в глобальных сервисах или клиентах
});
```

---

#### 4. Использование в middleware

```ts
export default defineNuxtRouteMiddleware(() => {
  const config = useRuntimeConfig();
  if (!config.apiSecret) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
});
```

Защита маршрутов с использованием приватных переменных[3].

---

### Особенности и преимущества

- Разделение публичных и приватных переменных для безопасности.
- Возможность менять значения без пересборки через переменные окружения.
- Простая работа с `.env` файлами и автоматический доступ через `useRuntimeConfig`.
- Поддержка везде — компоненты, плагины, middleware, серверные функции.
- Удобство и безопасность при работе с секретами и конфигурацией в Nuxt-приложениях[2][3][7].

---

**Итог:**  
Runtime Config — ключевой механизм в Nuxt для управления конфигурацией и переменными окружения, обеспечивающий безопасность, гибкость настройки и удобство доступа как на клиенте, так и на сервере[2][3][7].

Источники
[1] Как работает runtime config в Nuxt 3? - Хабр Q&A https://qna.habr.com/q/1347548
[2] Runtime Config · Nuxt Advanced v4 https://nuxt.com/docs/guide/going-further/runtime-config
[3] Как работать с переменными окружения в Nuxt https://landing.stage.purpleschool.purplecode.ru/knowledge-base/article/nuxt-env
[4] Как прочитать настройки из nuxt.config.ts при сборке? https://www.reddit.com/r/Nuxt/comments/15veanl/how_to_read_settings_from_nuxtconfigts_on_build/
[5] Как использовать nuxt set для конфигурации - Антон Ларичев https://landing.stage.purpleschool.purplecode.ru/knowledge-base/article/nuxt-set
[6] Режимы рендеринга · Концепции Nuxt - Vercel https://nuxt-ru.vercel.app/docs/guide/concepts/rendering
[7] Как организовать работу с API в Nuxt 3 без шума и пыли https://habr.com/ru/articles/837584/
[8] Nuxt 3 доступ к .env переменным : r/vuejs https://www.reddit.com/r/vuejs/comments/y5d33w/nuxt_3_access_env_variables/
[9] Configuration · Get Started with Nuxt v4 https://nuxt.com/docs/getting-started/configuration
[10] Runtime Configs in Nuxt.js https://masteringnuxt.com/blog/runtime-configs-in-nuxtjs
