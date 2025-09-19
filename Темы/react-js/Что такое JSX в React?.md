
---

# Что такое JSX в React?

**JSX (JavaScript XML)** — это синтаксическое расширение для JavaScript, которое используется в React для описания структуры пользовательского интерфейса. JSX позволяет писать компоненты, которые выглядят как HTML, но в действительности являются JavaScript-кодом.

---

## Зачем нужен JSX?

- **Удобство и читаемость**  
  JSX позволяет описывать элементы интерфейса в привычном формате, похожем на HTML, но с полным доступом к возможностям JavaScript.

- **Интеграция с логикой**  
  В JSX можно встраивать JavaScript-выражения прямо в разметку, что упрощает создание динамических и интерактивных интерфейсов.

- **Компиляция в JavaScript**  
  JSX не является стандартным JavaScript и компилируется в обычный JavaScript с помощью таких инструментов, как Babel.

---

## Важные особенности JSX

- JSX элементы всегда должны быть заключены в один корневой элемент. Если нужно вернуть несколько элементов, их оборачивают в контейнер, например, `<div>` или используют `React.Fragment` (`<> ... </>`).
- Для имен атрибутов используется camelCase (например, `className` вместо `class`, `htmlFor` вместо `for`).
- JSX — это всего лишь синтаксический сахар, который компилируется в вызовы `React.createElement()`.

---

## Пример использования JSX

```JS <code>
function Greeting() {
  const name = "Иван";
  return <h1>Привет, {name}!</h1>;
}
</code>
```

Здесь JSX используется для возврата элемента `<h1>`, который выводит приветственное сообщение. В фигурных скобках `{name}` вставляется JavaScript-выражение.

---

## Как работает JSX под капотом

JSX-компилятор (например, Babel) преобразует JSX в вызовы функции `React.createElement()`. Например, этот JSX:

```JS <code>
const element = <h1 className="title">Привет, мир!</h1>;
</code>
```

компилируется в такой JavaScript:

```JS <code>
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Привет, мир!'
);
</code>
```

`React.createElement()` возвращает объект — React-элемент, который React использует для построения и обновления DOM.

---

## Дополнительные примеры

### Несколько элементов в одном корневом контейнере

```JS <code>
function List() {
  return (
    <>
      <li>Первый элемент</li>
      <li>Второй элемент</li>
    </>
  );
}
</code>
```

Здесь используется `React.Fragment` (`<>...</>`), чтобы вернуть несколько элементов без дополнительного DOM-узла.

---

### Встраивание выражений JavaScript

```JS <code>
function ShowSum() {
  const a = 5;
  const b = 10;
  return <p>Сумма: {a + b}</p>;
}
</code>
```

В JSX можно вставлять любые корректные JavaScript-выражения внутри фигурных скобок.

---

Источники: [Что такое JSX в React — hackfrontend](https://www.hackfrontend.com/docs/react/what-is-jsx)[2][4][5]

[1](https://reactdev.ru/archive/react16/jsx-in-depth/)
[2](https://ru.legacy.reactjs.org/docs/introducing-jsx.html)
[3](https://scriptdev.ru/book/jsx/react/)
[4](https://itchief.ru/react/jsx)
[5](https://ru.react.js.org/docs/introducing-jsx.html)
[6](https://www.digitalocean.com/community/tutorials/how-to-create-react-elements-with-jsx-ru)
[7](https://reactnativedev.ru/rn/intro-react/)
[8](https://www.mousedc.ru/learning/491-peremennye-atributy-jsx-react/)
[9](https://reactdev.ru/archive/react16/tutorial/)
[10](https://habr.com/ru/companies/ruvds/articles/428077/)
