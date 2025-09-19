---
### Что такое поднятие (Hoisting)?

Hoisting — механизм, при котором объявления переменных и функций интерпретируются как находящиеся в начале области видимости (функции или глобальной). Только объявления поднимаются, а инициализации остаются на месте.
---

### Функциональные объявления (Function Declarations)

Функции, объявленные через `function`, **полностью поднимаются** — их можно вызывать до объявления.

```js
sayHello(); // "Hello from function declaration!"

function sayHello() {
  console.log('Hello from function declaration!');
}
```

---

### Переменные с `var`

Объявления переменных с `var` поднимаются, но только объявление, а не присвоение.

```js
console.log(a); // undefined, объявление поднимается, но инициализация нет
var a = 10;
console.log(a); // 10
```

---

### Переменные с `let` и `const`

Объявления `let` и `const` поднимаются, но они находятся в **временной мёртвой зоне (TDZ)** до инициализации, обращение к ним до присвоения приводит к ошибке.

```js
// console.log(b); // ReferenceError: нельзя использовать до инициализации
let b = 20;

// console.log(c); // ReferenceError: нельзя использовать до инициализации
const c = 30;
```

---

### Дополнительные примеры

```js
// Поднятие переменной var
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// Ошибка с let
// console.log(y); // ReferenceError
let y = 10;
console.log(y); // 10
```

```js
// Функция доступна до объявления
foo(); // Work!
function foo() {
  console.log('Work!');
}
```

```js
// Функциональное выражение не поднимается
// bar(); // ReferenceError
var bar = function () {
  console.log('Not work');
};
```

---

### Итог:

- Hoisting поднимает только объявления, а не инициализации.
- Функции объявленные через `function` поднимаются полностью.
- Переменные с `var` поднимаются с инициализацией `undefined`.
- `let` и `const` поднимаются в TDZ, пока не инициализированы.
- Рекомендуется использовать `let` и `const` для ясности и предотвращения ошибок.

---

Если нужно, могу добавить примеры применения Hoisting в Vue.js и React. Хотите?

[1](https://developer.mozilla.org/ru/docs/Glossary/Hoisting)
[2](https://frontend-stuff.com/blog/hoisting/)
[3](https://codechick.io/tutorials/javascript/js-hoisting)
[4](https://stackdev.blog/blog/hoisting)
[5](https://habr.com/ru/articles/127482/)
[6](https://www.youtube.com/watch?v=zeKkB7X5Kno)
[7](https://alishoff.com/blog/229)
[8](https://msiter.ru/tutorials/javascript/js_hoisting)
