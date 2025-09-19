
---

# Что такое useReducer в React?

**useReducer** — это React-хук, который позволяет управлять состоянием компонента с помощью редьюсера — функции, похожей на reducer из Redux.

Он особенно полезен, когда:

- состояние сложное (объект, массив),
- необходимо много условий и действий для изменения состояния,
- требуется предсказуемое обновление с понятной логикой.

---

## Синтаксис

```JS <code>
const [state, dispatch] = useReducer(reducer, initialState);
```

- `reducer` — функция, принимающая `state` и `action`, возвращающая новое состояние.
- `initialState` — начальное состояние.
- `state` — текущее состояние.
- `dispatch(action)` — функция, вызывающая обновление состояния.

---

## Простой пример

```JS <code>
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Счёт: {state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
```

---

## Как работает редьюсер?

Редьюсер — чистая функция без побочных эффектов, которая принимает текущее состояние и действие (`action`) и возвращает новое состояние:

$$
\text{(state, action) => newState}
$$

---

## Преимущества useReducer

- Позволяет централизовать бизнес-логику обновления состояния вне компонента.
- Делает компоненты чище и легче для тестирования.
- Альтернатива `useState` для сложной логики и структурированных состояний.

---

## Вывод

`useReducer` — мощный инструмент управления состоянием для сложных случаев, который помогает сделать код предсказуемым и удобным для сопровождения.

---

Источник: [Что такое useReducer в React? — hackfrontend](https://www.hackfrontend.com/docs/react/react-hooks-7)[2]

[1](https://reactdev.ru/reference/react/useReducer/)
[2](https://www.hackfrontend.com/docs/react/react-hooks-7)
[3](https://habr.com/ru/companies/otus/articles/752824/)
[4](https://webtricks-master.ru/react-hooks/uchim-usereducer-na-primerah-react-hooks/)
[5](https://dev-gang.ru/article/huk-usereducer-v-react-s-podrobnym-objasneniem-pee5hra4qs/)
[6](https://ru.react.dev/reference/react/useReducer)
[7](https://ru.legacy.reactjs.org/docs/hooks-reference.html)
[8](https://www.reddit.com/r/reactjs/comments/10f2d1y/some_questions_about_usereducer/)
[9](https://www.youtube.com/watch?v=o1hrVoKEbZI)
