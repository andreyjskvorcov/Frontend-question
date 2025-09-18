**defineNuxtRouteMiddleware** в Nuxt — это функция для создания middleware, которые работают как навигационные охранники (route guards). Они позволяют выполнять логику перед переходом на определённый маршрут, например, проверять права доступа, делать редиректы или прерывать навигацию[3][2][6].

---

### Что такое defineNuxtRouteMiddleware

Это helper-функция, в которую передается функция с параметрами текущего (from) и следующего (to) маршрутов. Middleware может:

- разрешить переход (ничего не возвращая),
- перенаправить пользователя (возвратом navigateTo),
- прервать навигацию (abortNavigation),
- выбросить ошибку и показать страницу ошибки[3].

Middleware может быть:

- именованным и располагаться в папке `middleware/`,
- глобальным (`.global` суффикс),
- встроенным непосредственно в страницу (inline)[2][5].

---

### Примеры использования

#### 1. Базовое ограничение доступа (auth middleware)

```ts
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user');
  if (!user.value?.isLoggedIn) {
    return navigateTo('/login'); // перенаправляем на страницу логина
  }
});
```

Этот middleware проверяет, авторизован ли пользователь, и если нет — переносит на страницу авторизации[3][2].

#### 2. Прерывание перехода при определенном параметре

```ts
export default defineNuxtRouteMiddleware((to) => {
  if (to.params.id === '1') {
    return abortNavigation(); // отмена навигации
  }
});
```

Пример запрета перехода на маршрут с id = 1[3].

#### 3. Встроенный middleware на странице

```vue
<script setup>
definePageMeta({
  middleware: [
    (to) => {
      if (!isAdmin()) {
        return navigateTo('/');
      }
    },
  ],
});
</script>
```

Middleware объявлен прямо в компоненте страницы для специфичной проверки[6].

#### 4. Глобальный middleware из плагина

```ts
export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'log',
    (to) => {
      console.log(`Навигация на ${to.fullPath}`);
    },
    { global: true }
  );
});
```

Выполняется при каждом изменении маршрута, например для логирования[2].

---

### Особенности

- Middleware вызывается и при серверном рендеринге и на клиенте (при навигации)[5].
- Вместо callback с next() используется возвращаемое значение для управления переходом[3].
- Можно динамически добавлять middleware через addRouteMiddleware[2].
- В middleware доступны глобальные функции `navigateTo` и `abortNavigation`[3][5].

---

**Итог:**  
defineNuxtRouteMiddleware — удобный и мощный способ внедрять логику контроля доступа, проверки и навигации в Nuxt, обеспечивая безопасность и гибкость приложения[3][6][2][5].

Источники
[1] Хранение маршрута в middleware Nuxt3 : r/Nuxt https://www.reddit.com/r/Nuxt/comments/15eutnz/nuxt3_middleware_route_storage/
[2] Каталог middleware в Nuxt 3 приложении https://mydev.fun/nuxt/nuxt3-directory-structure-middleware
[3] defineNuxtRouteMiddleware · Nuxt Utils v3 https://nuxt.com/docs/3.x/api/utils/define-nuxt-route-middleware
[4] Nuxt JS и Vue 3 для SSR приложений https://purpleschool.ru/knowledge-base/article/nuxt-3
[5] middleware · Nuxt Directory Structure v4 https://nuxt.com/docs/guide/directory-structure/middleware
[6] How to create Navigation Guards in Nuxt with ... https://masteringnuxt.com/blog/how-to-create-navigation-guards-in-nuxt-with-definenuxtroutemiddleware
[7] useRouter · Nuxt Composables https://nuxt-ru.vercel.app/docs/api/composables/use-router
[8] Nuxt 3 реализация авторизации с JSON Web Token https://ru.linkedin.com/pulse/nuxt-3-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D1%81-json-web-token-igor-lutsenko-gxfbc
[9] Как работать с переменными окружения в Nuxt https://landing.stage.purpleschool.purplecode.ru/knowledge-base/article/nuxt-env
