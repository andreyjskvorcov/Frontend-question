### Что такое Лексическое окружение?

Лексическое окружение — внутренний механизм JavaScript для хранения переменных и функций в области видимости. Каждая функция, блок `{}`, и глобальная область имеют своё лексическое окружение.

---

### Состав Lexical Environment:

- **Environment Record** — объект, хранящий локальные переменные, функции, параметры.
- **Ссылка на внешнее лексическое окружение (outer)** — указывает область, в которой была создана функция.

---

### Пример:

```js
function outer() {
  let a = 1;

  function inner() {
    let b = 2;
    console.log(a + b);
  }

  inner();
}

outer(); // 3
```

- При вызове `outer` создается лексическое окружение с переменной `a`.
- При вызове `inner` создаётся своё лексическое окружение с `b` и доступом к `a` через внешнее окружение (замыкание).

---

### Визуализация цепочки окружений:

```
Global Lexical Environment
  └─ LexicalEnv: outer()
        └─ LexicalEnv: inner()
```

---

### Лексическое ≠ динамическое окружение

JavaScript использует лексическую область видимости: переменные доступны по месту определения, а не вызова.

```js
let x = 10;

function log() {
  console.log(x);
}

function run() {
  let x = 20;
  log(); // Выведет 10, а не 20
}

run();
log();
```

Функция `log` запоминает контекст своего определения, а не вызова.

---

### Итог

- Лексическое окружение — механизм хранения переменных и функций для текущей области видимости.
- Образует цепочку областей видимости, обеспечивая работу scope и замыканий.
- Помогает понять, как JavaScript находит переменные во время выполнения.

---

Если нужно, могу дополнить примерами в Vue.js и React. Хотите?

[1](https://learn.javascript.ru/closure)
[2](https://www.hackfrontend.com/docs/javascript/lexical-environment)
[3](https://code.mu/ru/javascript/book/prime/functions/closures/lexical-environment/)
[4](https://habr.com/ru/companies/lanit/articles/733064/)
[5](https://javascript.dp.ua/ru/javascript/book/prime/functions/functions-lexical-environment.html)
[6](https://itchief.ru/javascript/closure)
[7](http://jsflow.org/docs/lex-env/)
[8](https://ru.hexlet.io/courses/js-functions-hard-way/lessons/lexical-environment/theory_unit)
[9](https://www.youtube.com/watch?v=sMRPnMgYxw8)
[10](https://www.reddit.com/r/learnjavascript/comments/1auj4pr/lexical_environment_execution_context_and_other/)
