RTK Query — это мощный инструмент в составе Redux Toolkit, предназначенный для упрощения работы с серверными API-запросами и кэшированием данных в Redux приложениях.

---

### Что такое RTK Query

- **RTK Query** автоматизирует создание сервисов для запросов к серверу.
- Позволяет легко создавать API slice с четким описанием endpoint-ов.
- Генерирует React хуки для загрузки, мутаций и обновления данных.
- Включает встроенное кэширование, дедубликацию запросов и управление состояниями загрузки.
- Упрощает код, избавляя от написания шаблонной логики запросов и обновления состояния.

---

### Архитектура RTK Query

- **createApi** — основной инструмент для описания API: указывается базовый URL и набор endpoint-ов (запросов, мутаций).
- **fetchBaseQuery** — легковесный адаптер для fetch, используемый по умолчанию внутри RTK Query.
- Хуки, автоматически сгенерированные из endpoint-ов, используются в компонентах для получения и управления данными.
- Инструмент хорошо интегрируется с Redux DevTools для отладки.

---

### Пример создания API Slice и использования

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  endpoints: (builder) => ({
    getPerson: builder.query({
      query: (id) => `people/${id}`,
    }),
  }),
});

export const { useGetPersonQuery } = starWarsApi;

// В компоненте React
function Person({ id }) {
  const { data, error, isLoading } = useGetPersonQuery(id);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return <div>Имя: {data.name}</div>;
}
```

---

### Итог

RTK Query существенно упрощает работу с серверными данными в Redux-приложениях благодаря автоматизации запросов, кэшированию и удобной интеграции с Redux Toolkit. Он позволяет писать меньше шаблонного кода и улучшает производительность за счёт эффективного управления состояниями.[1][2][3][4][5]

[1](https://ru.hexlet.io/courses/js-redux-toolkit/lessons/rtk-query/theory_unit)
[2](https://habr.com/ru/companies/domrf/articles/736336/)
[3](https://habr.com/ru/companies/alfa/articles/705640/)
[4](https://blog.ithillel.ua/ru/articles/rtk-query)
[5](https://github.com/rajdee/redux-toolkit-in-russian)
[6](https://www.youtube.com/watch?v=uSwe-5dPrV8)
[7](https://www.reddit.com/r/reactjs/comments/152yh32/understanding_rtk_query_and_redux_toolkit/)
[8](https://redux-toolkit.js.org/rtk-query/overview)
[9](https://itvdn.com/ru/channel/video/redux-toolkit-query)
[10](https://www.reddit.com/r/reactjs/comments/1f2wmlc/axios_vs_rtk_query_which_is_better_for_making_api/)
