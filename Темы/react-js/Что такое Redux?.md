
---

# Что такое Redux?

**Redux** — библиотека для управления состоянием JavaScript-приложений. Она помогает создавать приложения, которые ведут себя предсказуемо, легко тестируются и работают в различных средах.

---

## Основные концепции Redux

### Store (Хранилище)

- Единственное место хранения состояния всего приложения.
- Создаётся с помощью функции `createStore` (в новых версиях лучше использовать `configureStore` из Redux Toolkit).
- Предоставляет методы для доступа к состоянию и его обновления.

---

### Actions (Действия)

- Простые JavaScript-объекты, описывающие, что произошло.
- Обязательное свойство — `type`.
- Могут содержать дополнительные данные в `payload`.

```js
const action = {
  type: 'ADD_TODO',
  payload: 'Изучить Redux',
};
```

---

### Reducers (Редьюсеры)

- Чистые функции, которые принимают текущее состояние и действие, возвращают новое состояние.
- Не изменяют существующее состояние (не мутируют объект), а создают новый.

```js
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};
```

---

## Принципы Redux

- **Единственный источник правды**  
  Все состояние приложения хранится в одном объекте внутри одного store.

- **Состояние только для чтения**  
  Единственный способ изменить состояние — отправить action.

- **Изменения через чистые функции**  
  Все изменения происходят через редьюсеры — чистые функции, которые создают новое состояние без мутаций.

---

## Пример использования Redux

```js
// Action Creator
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
});

// Reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};

// Store
const store = createStore(todoReducer);

// Подписка на изменения
store.subscribe(() => console.log(store.getState()));

// Отправка действия
store.dispatch(addTodo('Изучить Redux'));
```

---

## Когда использовать Redux?

Redux рекомендуется, если:

- Состояние приложения сложное.
- Часто происходят обновления состояния.
- Логика обновления состояния сложная.
- Большая кодовая база и много разработчиков.

**Важно:** Redux добавляет дополнительную сложность, поэтому для небольших приложений часто достаточно встроенного управления состоянием React.

---

Источник: [Что такое Redux — hackfrontend](https://www.hackfrontend.com/docs/redux/what-is-redux)

[1](https://foxminded.ua/ru/chto-takoe-redux/)
[2](https://habr.com/ru/companies/otus/articles/863002/)
[3](https://reactdev.ru/libs/redux/react-redux/osnovi-redux-teoriya/)
[4](https://hawkingbros.com/article/redux-i-vse-vse-vse)
[5](https://blog.skillfactory.ru/glossary/redux/)
[6](https://blog.openreplay.com/ru/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-redux-react-%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5%D0%BC/)
[7](https://quasa.io/ru/media/chto-takoe-redux-polnoe-rukovodstvo-dlya-nachinayushchih)
[8](https://rajdee.gitbooks.io/redux-in-russian/content/docs/introduction/ThreePrinciples.html)
[9](https://skyeng.ru/magazine/wiki/it-industriya/chto-takoe-reduks/)
[10](https://www.8host.com/blog/vvedenie-v-redux-osnovnye-ponyatiya/)
