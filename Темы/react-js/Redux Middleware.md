
---

# Redux Middleware

**Redux Middleware** — механизм расширения функциональности Redux, позволяющий внедрять дополнительную логику между отправкой действия (action) и моментом его обработки в редьюсере (reducer).

---

## Для чего нужен Middleware?

Middleware в Redux используется для:

- Обработки асинхронных операций (например, запросы к API)
- Логирования действий
- Обработки ошибок
- Изменения или модификации действий перед их попаданием в редьюсер
- Отмены действий при необходимости

---

## Как работает Middleware?

Middleware располагается между функциями `dispatch` и `reducer`, что позволяет:

- Перехватывать действия
- Модифицировать или фильтровать действия
- Создавать новые действия
- Останавливать ненужные действия

---

## Пример простого Middleware

```js
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Предыдущее состояние:', store.getState());
  console.log('Действие:', action);

  const result = next(action);

  console.log('Следующее состояние:', store.getState());
  return result;
};

// Подключение middleware к store
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
```

---

## Популярные Middleware

- **Redux Thunk** — для обработки асинхронных операций.
- **Redux Saga** — для сложных асинхронных потоков.
- **Redux Observable** — для реактивного программирования.
- **Redux Logger** — для удобного логирования действий и состояний.

---

## Важно

Middleware следует использовать только при необходимости, поскольку каждый дополнительный middleware увеличивает сложность приложения.

---

Источник: [Redux Middleware — hackfrontend](https://www.hackfrontend.com/docs/redux/redux-middleware)

[1](https://www.hackfrontend.com/docs/redux/redux-middleware)
[2](https://ru.hexlet.io/courses/js-redux-toolkit/lessons/middlewares/theory_unit)
[3](https://reactdev.ru/libs/redux/react-redux/middleware-usiliteli/)
[4](https://webtricks-master.ru/reactjs/pishem-svoj-middleware-dlya-redux/)
[5](https://habr.com/ru/companies/otus/articles/863002/)
[6](https://education.yandex.ru/handbook/flutter/article/redux-prodvinutie-kontseptsii)
[7](https://rajdee.gitbooks.io/redux-in-russian/content/docs/api/applyMiddleware.html)
[8](https://habr.com/ru/articles/851224/)
[9](https://www.youtube.com/watch?v=du6oECKM3MY)
