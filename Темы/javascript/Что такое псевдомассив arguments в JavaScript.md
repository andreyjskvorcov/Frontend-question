
---

### Что такое псевдомассив arguments?

`arguments` — встроенный объект, доступный внутри обычных (не стрелочных) функций, содержащий все переданные функции аргументы, независимо от объявленных параметров. Позволяет работать с переменным числом аргументов.

---

### Пример использования:

```js
function sum() {
  console.log(arguments); // Псевдомассив
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(sum(1, 2, 3)); // 6
```

---

### Особенности объекта arguments

| Характеристика      | Значение                                   |
| ------------------- | ------------------------------------------ |
| Тип                 | object                                     |
| Имеет `length`      | да                                         |
| Индексация          | как у массива (`[0]`, `[1]` и т.д.)        |
| Методы массива      | отсутствуют (нужно преобразовать в массив) |
| Только для function | отсутствует в стрелочных функциях          |

---

### Почему это псевдомассив?

- Есть индексы и `length`
- Но нет методов массива, таких как `map`, `forEach`, `filter`

---

### Преобразование в настоящий массив

```js
const argsArray1 = Array.from(arguments);
// или
const argsArray2 = [...arguments];
```

---

### В стрелочных функциях `arguments` отсутствует:

```js
const foo = () => {
  console.log(arguments); // ReferenceError
};

foo(1, 2, 3);
```

---

### Современная альтернатива — rest параметры:

```js
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
```

---

### Итог

`arguments` — устаревшая практика, в современных проектах рекомендуется использовать rest-параметры (`...args`).

---

Если нужно, могу добавить примеры использования псевдомассива arguments и rest в Vue.js и React. Хотите?

[1](https://www.hackfrontend.com/docs/javascript/arguments)
[2](https://learn.javascript.ru/arguments-pseudoarray)
[3](https://maxello.gitbooks.io/js-note/content/04_functions/psevdo-massiv_arguments.html)
[4](https://sobes.tech/en/bank/frontend/e89a1b79-ecfb-4478-85f2-372dd1b9fff2)
[5](https://goit.global/javascript/ru/v1/module-02/functions.html)
[6](https://jessiepinkman.gitbooks.io/javascript/r/psevdomassiv-arguments.html)
[7](https://ru.stackoverflow.com/questions/588756/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%BF%D1%81%D0%B5%D0%B2%D0%B4%D0%BE-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82)
[8](https://www.youtube.com/watch?v=WwfFxbrcO_k)
[9](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/arguments)
[10](https://ru.stackoverflow.com/questions/934346/%D0%94%D0%BB%D1%8F-%D1%87%D0%B5%D0%B3%D0%BE-%D0%B0%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%BF%D1%81%D0%B5%D0%B2%D0%B4%D0%BE%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-arguments-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D1%8F%D1%82%D1%8C-%D0%B2-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%83%D1%8E-arg-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%BA%D0%BE%D0%BF%D0%B8)
