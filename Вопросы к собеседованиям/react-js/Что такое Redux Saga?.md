Redux Saga — это библиотека для управления побочными эффектами (сайд-эффектами) в Redux-приложениях, которая упрощает и структурирует работу с асинхронным кодом, такими как запросы к серверу, таймеры, события и пр.

---

### Что такое Redux Saga

- Библиотека реализована с использованием функций-генераторов ES6.
- Saga состоит из двух типов функций:
  - **Watcher saga** — слушает определённые действия (actions) в Redux и запускает соответствующие задачи.
  - **Worker saga** — выполняет асинхронную задачу (например, вызов API) и отправляет действия с результатом.
- Реализует декларативный подход к описанию сайд-эффектов: описывает, что должно происходить, а не как.
- Позволяет легко тестировать асинхронную логику и управлять сложными потоками задач, отменами, конкурентным выполнением.

---

### Архитектура Redux Saga

- **Middleware** — Redux Saga подключается как middleware к Redux store.
- **Effects** — специальные объекты (эффекты), которые saga "выдаёт" (`yield`), описывая операции (вызов функции, диспатч, задержку и т.д.).
- **Генераторы** — функции, выполнение которых можно приостанавливать и возобновлять, что упрощает обработку ассинхронных действий.

---

### Пример Redux Saga: запрос пользователя

```js
import { call, put, takeEvery } from 'redux-saga/effects';

// API вызов
function fetchUserApi(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => response.json()
  );
}

// Worker saga: выполняет запрос
function* fetchUser(action) {
  try {
    const user = yield call(fetchUserApi, action.payload);
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', payload: e.message });
  }
}

// Watcher saga: слушает действие USER_FETCH_REQUESTED
function* watchFetchUser() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default watchFetchUser;
```

---

### Итог

Redux Saga помогает управлять побочными эффектами в Redux через декларативный и тестируемый подход с использованием генераторов, что делает асинхронный код более управляемым, понятным и масштабируемым.[1][2][3][6][9]

[1](https://habr.com/ru/companies/usetech/articles/735914/)
[2](https://ru.redux-saga.js.org)
[3](https://habr.com/ru/articles/351168/)
[4](https://iamakulov.com/talks/redux-in-real-life/)
[5](https://quasa.io/ru/media/chto-takoe-redux-polnoe-rukovodstvo-dlya-nachinayushchih)
[6](https://www.youtube.com/watch?v=yFHjqVI6k-I)
[7](https://hawkingbros.com/article/redux-i-vse-vse-vse)
[8](https://vk.com/@takeoff_staff-redux-saga)
[9](https://ru.redux-saga.js.org/soderzhanie/introduction/beginnertutorial)
