
---

# Разница между функциональными и классовыми компонентами в React

## Что такое компоненты в React?

Компоненты — это строительные блоки React-приложения. Они бывают двух типов:

- **Функциональные компоненты** — обычные JavaScript-функции.
- **Классовые компоненты** — классы, наследующие `React.Component`.

---

## Основные отличия

|                                   | Функциональные компоненты                 | Классовые компоненты                        |
| --------------------------------- | ----------------------------------------- | ------------------------------------------- |
| Синтаксис                         | `function MyComponent()`                  | `class MyComponent extends React.Component` |
| Поддержка состояния               | Да, через хуки (`useState`, `useReducer`) | Да, через `this.state`                      |
| Жизненный цикл                    | Через хуки (`useEffect` и др.)            | Через методы (`componentDidMount` и др.)    |
| Контекст                          | Через `useContext()`                      | Через `this.context`                        |
| this                              | Нет `this`                                | Используется `this`                         |
| Краткость кода                    | Короче и проще                            | Более многословные                          |
| Поддержка хуков                   | Да                                        | Нет                                         |
| Производительность (теоретически) | Чуть выше                                 | Чуть ниже                                   |

---

## Пример функционального компонента

```JS <code>
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Компонент отрендерен");
    return () => {
      console.log("Компонент размонтирован");
    };
  }, []);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
</code>
```

---

## Пример классового компонента

```JS <code>
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Компонент отрендерен");
  }

  componentWillUnmount() {
    console.log("Компонент размонтирован");
  }

  render() {
    return (
      <div>
        <p>Счетчик: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
</code>
```

---

## Когда использовать

- **Функциональные компоненты** — современный стандарт, используются в 99% случаев, особенно с хуками.
- **Классовые компоненты** — в основном в устаревших проектах или при работе с легаси-кодом.

---

## Вывод

- Функциональные компоненты проще и удобнее, особенно с появлением хуков.
- Классовые компоненты считаются устаревшими и используются только для обратной совместимости.
- Рекомендуется писать все новые проекты только с функциональными компонентами.

---

Источник: [Разница между функциональными и классовыми компонентами в React — hackfrontend](https://www.hackfrontend.com/docs/react/difference-between-functional-and-class-components)[1]

[1](https://www.hackfrontend.com/docs/react/difference-between-functional-and-class-components)
[2](https://habr.com/ru/companies/ruvds/articles/444348/)
[3](https://www.reddit.com/r/reactjs/comments/zqo6th/functional_vs_class_components/)
[4](https://www.youtube.com/watch?v=HQLORQ-H3qo)
[5](https://www.reddit.com/r/reactjs/comments/qlr53i/what_is_the_technical_difference_between_class/)
[6](https://yandex.ru/q/js/12708028417/)
[7](https://ru.legacy.reactjs.org/docs/components-and-props.html)
[8](https://habr.com/ru/articles/711940/)
[9](https://frontend-stuff.com/blog/react-components-hooks-vs-classes/)
