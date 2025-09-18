Стрелочная функция и Function Declaration (обычное объявление функции) имеют ключевые различия в синтаксисе, поведении контекста `this`, всплытии (hoisting) и других особенностях.

---

### Основные отличия стрелочной функции от Function Declaration

| Характеристика                                | Function Declaration                                                   | Стрелочная функция (Arrow Function)                               |
| --------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Синтаксис**                                 | `function name() { ... }`                                              | `(args) => { ... }` или сокращённо `(args) => expression`         |
| **Hoisting (всплытие)**                       | Функция "всплывает" — может быть вызвана до объявления                 | Не всплывает — использовать можно только после объявления         |
| **Контекст this**                             | Свой `this` в зависимости от способа вызова                            | Лексический `this` — наследует из внешнего контекста              |
| **arguments**                                 | Есть локальная переменная `arguments`                                  | Не имеет `arguments`, вместо этого используются rest параметры    |
| **Использование как конструктор**             | Можно использовать с `new` для создания объектов                       | Нельзя использовать с `new`, не может быть конструктором          |
| **Компактность записи**                       | Более громоздкий синтаксис                                             | Более короткий и удобный для небольших функций                    |
| **Использование с функциями высшего порядка** | Используются, но не так часто в коллбеках из-за лексического контекста | Часто используются благодаря компактности и фиксированному `this` |

---

### Пример Function Declaration

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // Hello, Alice!
```

---

### Пример стрелочной функции

```js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet('Bob'); // Hello, Bob!
```

---

### Ключевой пример с `this`

```js
const person = {
  name: 'Alex',
  funcDeclaration: function () {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  },
};

person.funcDeclaration(); // Alex
person.arrowFunc(); // undefined или window.name (в зависимости от окружения)
```

В `funcDeclaration` значение `this` зависит от вызова, а в стрелочной функции `this` берётся из внешнего лексического контекста.

---

### Итог

- **Function Declaration** используется для классического объявления функций с собственным `this` и поднятием.
- **Стрелочная функция** — более компактный синтаксис с лексическим `this`, хорошо подходит для коллбеков и функционального программирования.

Понимание этих различий важно для правильного выбора функций и предотвращения ошибок в JavaScript.[1][3][4][6]

[1](https://habr.com/ru/articles/738146/)
[2](https://vc.ru/dev/133379-5-otlichii-mezhdu-obychnymi-i-strelochnymi-funkciyami)
[3](https://webadventures.ru/javascript-functions/)
[4](https://www.hackfrontend.com/docs/javascript/difference-between-arrow-declaration-expression-functions)
[5](https://timeweb.cloud/tutorials/javascript/strelochnye-funkcii-v-javascript)
[6](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
[7](https://learn.javascript.ru/function-expressions)
[8](https://www.youtube.com/watch?v=IcgdjdeOziA)
[9](https://learn.javascript.ru/arrow-functions-basics)
[10](https://habr.com/ru/articles/917840/)
