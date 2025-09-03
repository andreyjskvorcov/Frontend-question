Дополнительно к уже перечисленным частям HTTP-запроса стоит выделить:

- Строка запроса (Request Line): содержит метод запроса, URI (путь и параметры) и версию протокола HTTP. Например, "GET /index.html HTTP/1.1".
- URI (Uniform Resource Identifier): указывает конкретный ресурс на сервере, к которому идет обращение.
- Версия протокола HTTP: показывает версию протокола, используемого для этого запроса, обычно HTTP/1.1 или HTTP/2.

## Примеры HTTP-запросов

### JavaScript (Fetch API)

```js
// GET-запрос
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Ошибка:", error));

// POST-запрос с телом запроса
fetch("https://api.example.com/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Вадим", age: 21 }),
})
  .then((response) => response.json())
  .then((data) => console.log("Ответ сервера:", data))
  .catch((error) => console.error("Ошибка:", error));
```

### Vue.js (с использованием Fetch)

```js
export default {
  methods: {
    fetchData() {
      fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => (this.data = data))
        .catch((error) => console.error(error));
    },
    sendData(payload) {
      fetch("https://api.example.com/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => console.log("Ответ сервера:", data))
        .catch((error) => console.error(error));
    },
  },
};
```

### React (с использованием Fetch и хуков)

```jsx
import React, { useEffect, useState } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const sendData = (payload) => {
    fetch("https://api.example.com/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => console.log("Ответ:", response))
      .catch(console.error);
  };

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => sendData({ name: "Вадим", age: 21 })}>
        Отправить данные
      </button>
    </div>
  );
}

export default ExampleComponent;
```

### Nuxt.js (в asyncData или методах)

```js
export default {
  async asyncData({ $fetch }) {
    const data = await fetch("https://api.example.com/data").then((res) =>
      res.json()
    );
    return { data };
  },
  methods: {
    async sendData(payload) {
      try {
        const response = await fetch("https://api.example.com/data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log("Ответ сервера:", data);
      } catch (error) {
        console.error("Ошибка запроса:", error);
      }
    },
  },
};
```

Таким образом, HTTP-запрос состоит из строки запроса (метод, URI, версия протокола), заголовков и тела (если применимо), и можно легко реализовать на JS и его популярных фреймворках с помощью Fetch API или XMLHttpRequest, например, как показано в примерах выше.[5][7]

[1](https://fruntend.com/posts/sposoby-otpravki-http-zaprosov-v-javascript)
[2](https://habr.com/ru/articles/245145/)
[3](https://learn.javascript.ru/xmlhttprequest)
[4](https://snipp.ru/js/fetch)
[5](https://habr.com/ru/articles/865040/)
[6](https://gagarin.mai.ru/files/2024/2024_sbornik_tezisov.pdf)
[7](https://tproger.ru/articles/http-zaprosy--get--post-i-drugie)
[8](https://sitevisor.cloud/blog/frontend/kak-sdelat-http-zapros-v-javascript)
[9](https://ru-brightdata.com/blog/how-tos-ru/fetch-api-nodejs)
[10](https://sky.pro/wiki/javascript/http-get-zapros-v-java-script-kak-sdelat-v-dashcode-widget/)
