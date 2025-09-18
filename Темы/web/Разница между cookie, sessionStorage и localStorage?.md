К дополнению к вашему описанию разницы между cookie, sessionStorage и localStorage:

- **Cookie** передаются на сервер с каждым HTTP-запросом, что увеличивает сетевой трафик, тогда как localStorage и sessionStorage хранят данные непосредственно в браузере и не отправляют их на сервер.
- **SessionStorage** уникален для каждой вкладки браузера, данные доступны только в рамках текущей вкладки и удаляются при её закрытии.
- **LocalStorage** хранит данные долго, даже после закрытия браузера, пока данные не будут явно удалены.
- Все три способа имеют ограничения по размеру: cookie обычно до 4 КБ, localStorage и sessionStorage — до 5 МБ.
- Cookie можно настроить с атрибутами безопасности и срока действия, что важно для работы с аутентификацией и безопасностью.

---

## Примеры использования в JavaScript, Vue, React и Nuxt

### JavaScript: работа с cookie, localStorage и sessionStorage

```js
// Cookie - установка и чтение
document.cookie = "username=Vadim; path=/; max-age=3600"; // сохраняется на 1 час
console.log(document.cookie);

// localStorage - установка и получение
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));

// sessionStorage - установка и получение
sessionStorage.setItem("sessionId", "123456");
console.log(sessionStorage.getItem("sessionId"));
```

### Vue.js: работа с localStorage и sessionStorage

```vue
<template>
  <div>
    <button @click="saveTheme">Сохранить тему</button>
    <button @click="loadTheme">Загрузить тему</button>
  </div>
</template>
<script>
export default {
  methods: {
    saveTheme() {
      localStorage.setItem("theme", "dark");
      sessionStorage.setItem("sessionKey", "abc123");
    },
    loadTheme() {
      console.log(localStorage.getItem("theme"));
      console.log(sessionStorage.getItem("sessionKey"));
    },
  },
};
</script>
```

### React: пример с использованием useEffect и localStorage

```jsx
import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <p>Текущая тема: {theme}</p>
      <button onClick={toggleTheme}>Переключить тему</button>
    </div>
  );
}

export default App;
```

### Nuxt.js: работа с localStorage в методах компонента

```vue
<template>
  <div>
    <button @click="saveData">Сохранить данные</button>
    <button @click="loadData">Загрузить данные</button>
  </div>
</template>

<script>
export default {
  methods: {
    saveData() {
      localStorage.setItem("user", JSON.stringify({ name: "Vadim" }));
    },
    loadData() {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
    },
  },
};
</script>
```

Таким образом, выбор между cookie, sessionStorage и localStorage зависит от задачи: cookie удобен для передачи данных серверу, sessionStorage — для кратковременного хранения в рамках вкладки, localStorage — для долговременного хранения на клиенте.[1][2][5]

[1](https://ru.hexlet.io/blog/posts/lokalnoe-hranilische-vs-sessionnoe-hranilische-vs-cookie)
[2](https://tproger.ru/articles/chto-takoe-cookies--localstorage-i-sessionstorage)
[3](https://sky.pro/media/raznicza-mezhdu-localstorage-sessionstorage-session-i-cookies/)
[4](https://sobes.tech/kk/bank/frontend/53f580ca-509e-46b3-a871-dc185b1e0039)
[5](https://webtricks-master.ru/javascript/chto-takoe-local-storage-session-storage-i-cookie/)
[6](https://learn.javascript.ru/localstorage)
[7](https://proglib.io/p/6-glavnyh-tehnologiy-dlya-hraneniya-dannyh-v-brauzere-2024-11-08)
[8](https://www.youtube.com/watch?v=pmd8D_YZ0BE)
[9](https://sobes.tech/en/bank/frontend/86e13be3-3e4a-48d2-b355-4fa4c1418673)
[10](https://sneakbug8.com/ru/cookies-js-storages/)
