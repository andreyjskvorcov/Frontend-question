
---

# Redux Thunk

**Redux Thunk** — middleware для Redux, который позволяет работать с асинхронными действиями. Thunk позволяет action creator возвращать функцию вместо обычного объекта действия, что делает возможным отложенное выполнение `dispatch`.

---

## Как работает Redux Thunk

Thunk позволяет action creator возвращать функцию вместо объекта действия. Эта функция может:

- Выполнять асинхронные операции
- Получать доступ к состоянию store через `getState`
- Отправлять другие действия через `dispatch`

---

## Пример использования Redux Thunk

```js
// Без Thunk (синхронное действие)
const increment = () => ({
  type: 'INCREMENT',
});

// С Thunk (асинхронное действие)
const incrementAsync = () => {
  return (dispatch) => {
    dispatch({ type: 'INCREMENT_REQUEST' });

    setTimeout(() => {
      dispatch({ type: 'INCREMENT_SUCCESS' });
    }, 1000);
  };
};

// Пример с API запросом
const fetchUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: 'FETCH_USER_REQUEST' });

      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();

      dispatch({
        type: 'FETCH_USER_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_USER_ERROR',
        error: error.message,
      });
    }
  };
};
```

---

## Подключение Redux Thunk

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
```

---

## Преимущества Redux Thunk

Redux Thunk особенно полезен для обработки API запросов и других асинхронных операций в Redux приложениях.

---

Источник: [Redux Thunk — hackfrontend](https://www.hackfrontend.com/docs/redux/redux-thunk)

[1](https://habr.com/ru/articles/483314/)
[2](https://www.hackfrontend.com/docs/redux/redux-thunk)
[3](https://www.hackfrontend.com/docs/redux/redux-middleware)
[4](https://it-shpora.pp.ua/thunk-redux-%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-%D0%B7%D0%B0%D1%87%D0%B5%D0%BC-%D0%BA%D0%B0%D0%BA-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D1%8C-%D0%B8-%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB/)
[5](https://sobes.tech/bank/frontend/a2614151-1a14-4460-84f8-020b1ddd9256)
[6](https://www.digitalocean.com/community/tutorials/redux-redux-thunk-ru)
[7](https://www.youtube.com/watch?v=Kd0gjKb7g9w)
[8](https://code.mu/ru/javascript/framework/react/book/redux/async-thunk/intro/)
[9](https://qna.habr.com/q/460206)
[10](https://monsterlessons.com/project/lessons/reduxjs-asinhronnye-eksheny-s-pomoshyu-redux-thunk)
