Unit-тесты (модульные тесты) — это автоматизированные проверки отдельных небольших частей (модулей) программного кода, например, функций или методов, чтобы убедиться, что они работают правильно и соответствуют ожидаемому поведению.

---

### Что такое Unit-тесты?

- Unit-тест — это отдельный тест, который изолированно проверяет работу минимального участка кода (функции, класса, метода).
- Цель — быстро обнаружить ошибки и предотвратить регрессии при изменении или добавлении нового кода.
- Unit-тесты обычно запускаются автоматически и часто, интегрируясь в процесс разработки.

---

### Зачем нужны Unit-тесты?

- Помогают обнаружить баги на ранних этапах.
- Упрощают поддержку и рефакторинг кода.
- Позволяют проверить отдельные компоненты без запуска всей системы.
- Повышают уверенность в качестве кода и ускоряют разработку.

---

### Примеры инструментов для Unit-тестирования

- **Jest** — популярный тестовый фреймворк от Facebook, часто используемый в React-проектах.
- **Mocha** — гибкий и легковесный тестовый фреймворк с возможностью выбора assertion библиотек.
- **Jasmine**, **AVA**, **Tape** и другие.

---

### Пример простого unit-теста на Jest

```js
// Функция для теста
function sum(a, b) {
  return a + b;
}

// Тесты
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds negative numbers", () => {
  expect(sum(-1, -2)).toBe(-3);
});
```

---

### Как работают Unit-тесты?

- Тесты запускаются через команду в терминале.
- Каждый тест проверяет поведение функции/метода.
- Выводится результат: тесты прошли или не прошли, с описанием ошибок.
- При изменении кода тесты помогают быстро выявить сломанные участки.

---

### Отличие Unit-тестов от других видов тестирования

| Вид тестирования      | Что тестируется                   | Область действия           |
| --------------------- | --------------------------------- | -------------------------- |
| Unit-тест (модульный) | Отдельный модуль (функция/класс)  | Изолировано                |
| Интеграционный тест   | Взаимодействие нескольких модулей | Несколько компонентов      |
| E2E (End-to-End)      | Полная работа приложения          | Весь пользовательский путь |

---

### Итог

Unit-тесты — фундаментальная часть современного процесса разработки, позволяющая гарантировать, что отдельные части кода работают корректно и устойчивы к изменениям. Инструменты, такие как Jest и Mocha, обеспечивают удобный способ написания и запуска таких тестов.[1][2][3][6][10]

[1](https://habr.com/ru/articles/169381/)
[2](https://blog.skillfactory.ru/glossary/unit-testirovanie/)
[3](https://habr.com/ru/articles/760828/)
[4](https://www.uplab.ru/blog/chto-takoe-yunit-testy-testirovanie-v-razrabotke-ot-unit-testov-do-e2e/)
[5](https://foxminded.ua/ru/yunit-testy/)
[6](https://otus.ru/journal/unit-testirovanie-opisanie-i-osobennosti/)
[7](https://www.youtube.com/watch?v=-PB5c-pB30k)
[8](https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
[9](https://practicum.yandex.ru/blog/chto-takoe-modulnoe-yunit-testirovanie/)
[10](https://skillbox.ru/media/code/chto-takoe-unit-testy/)

Ниже приведены простые примеры unit-тестов на Jest и Mocha, чтобы показать, как они выглядят на практике.

---

### Пример unit-теста на Jest

```js
// sum.js - простая функция сложения
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

```js
// sum.test.js - тесты для sum.js с Jest
const sum = require("./sum");

test("сложение 1 + 2 должно быть 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("сложение отрицательных чисел", () => {
  expect(sum(-1, -2)).toBe(-3);
});
```

Запуск теста: `npm test` (при настройке jest в проекте).

---

### Пример unit-теста на Mocha с Node.js assert

```js
// sum.js - та же функция
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

```js
// test/sum.test.js - тесты на Mocha
const assert = require("assert");
const sum = require("../sum");

describe("Тест функции sum", function () {
  it("должна корректно складывать 1 и 2", function () {
    assert.equal(sum(1, 2), 3);
  });

  it("должна складывать отрицательные числа", function () {
    assert.equal(sum(-1, -2), -3);
  });
});
```

Запуск теста: `mocha` (после установки Mocha в проект).

---

### Пример структуры теста

- Описываем группу тестов с помощью `describe()`.
- Каждый тест задаётся функцией `it()` с описанием и проверкой.
- В Jest используется `test()` или `it()` и `expect()`.
- В Mocha обычно `assert` или другие assertion-библиотеки.

---

### Ключевые моменты

- Unit-тесты изолируют код и проверяют конкретные функции или модули.
- Важно писать тесты с понятными описаниями.
- Тесты помогают находить ошибки на ранних этапах и предотвращают регрессии.

---

Если нужно, могу помочь с примерами для React или Vue.

[1](https://habr.com/ru/articles/486360/)
[2](https://vc.ru/id2565094/911664-jest-vs-mocha)
[3](https://track.habr.com/frontend/skill/unit-tests)
[4](https://learn.microsoft.com/ru-ru/visualstudio/javascript/unit-testing-javascript-with-visual-studio?view=vs-2022)
[5](https://qarocks.ru/unittesting-basics-with-examples/)
[6](https://highload.tech/yunit-testy-v-javascript-instrumenty-i-platformy/)
[7](https://www.reddit.com/r/node/comments/q55mh2/jest_or_mocha_for_testing_nodejs_application/?tl=ru)
[8](https://amorgunov.com/posts/2020-01-28-how-write-tests-in-nodejs/)
[9](https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme-ru.md)
