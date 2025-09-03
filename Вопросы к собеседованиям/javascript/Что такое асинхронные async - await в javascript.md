Асинхронные функции async/await в JavaScript — это синтаксический сахар над промисами, упрощающий написание и чтение асинхронного кода. Ключевое слово async перед функцией делает её асинхронной и автоматически заставляет функцию возвращать промис. Ключевое слово await внутри async-функции приостанавливает выполнение функции до тех пор, пока промис не выполнится (успешно или с ошибкой), после чего выполнение продолжается с полученным результатом.

Основные моменты:

- async превращает обычную функцию в асинхронную, возвращающую Promise.
- await останавливает выполнение в точке вызова до завершения промиса, позволяя писать код в более "синхронном" стиле.
- await можно использовать только внутри async-функций (или на верхнем уровне в модулях).
- Вместо цепочек .then() и .catch() для обработки промисов можно использовать конструкцию try/catch для обработки ошибок.

Пример:

```js
async function getData() {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
```

Здесь выполнение приостанавливается на каждой строчке с await, пока промисы не разрешаются, что делает асинхронный код читаемым и удобным для понимания.

Таким образом, async/await — удобный современный способ работы с асинхронностью в JavaScript, делающий код более плоским и линейным по сравнению с использованием чистых промисов или колбэков.[1][2][3][5][6][7][8][9]

[1](https://learn.javascript.ru/async-await)
[2](https://doka.guide/js/async-await/)
[3](https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Async_JS/Promises)
[4](https://habr.com/ru/articles/474726/)
[5](https://www.hackfrontend.com/docs/javascript/async-await)
[6](https://thecode.media/async-await-v-javascript/)
[7](https://highload.tech/chto-takoe-async-await-v-javascript-primery-ispolzovaniya/)
[8](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function)
[9](https://wiki.merionet.ru/articles/asinxronnye-funkcii-javascript-cto-eto-takoe-i-kak-imi-polzovatsia)
