?

---

Что такое async/await?

Async/await — это синтаксический сахар в JavaScript, который упрощает работу с асинхронным кодом, делая его более линейным, понятным и читаемым. Вместо цепочек промисов и колбэков, async/await позволяет писать асинхронные операции как синхронные, используя ключевые слова `async` для объявления асинхронной функции и `await` — для ожидания результата промиса.

---

### Преимущества async/await

- Понятный и более компактный синтаксис.
- Легкая обработка ошибок через `try/catch`.
- Упрощение чтения и понимания кода.
- Возможность писать асинхронные функции, которые возвращают промисы автоматически.

---

### JS-примеры

```js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

fetchData();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedFunction() {
  console.log("Начало выполнения");
  await delay(2000);
  console.log("Задержка окончена");
}

delayedFunction();
```

---

### Пример с Axios

```js
import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

fetchData();
```

---

### Async/await во Vue 3

- Используется внутри lifecycle хуков (`onMounted`, `created` через `setup`), методов и composables.
- Пример загрузки данных в `setup` с `useAsyncData` в Nuxt 3:

```vue
<script setup>
const { data, error } = await useAsyncData("posts", () => $fetch("/api/posts"));

if (error.value) {
  console.error("Ошибка загрузки:", error.value);
}
</script>
```

- В методах компонентов Vue:

```js
export default {
  async mounted() {
    try {
      const res = await fetch("https://api.example.com/items");
      this.items = await res.json();
    } catch (e) {
      this.error = e;
    }
  },
};
```

---

### Async/await в React

- Используется в функциях-обработчиках, эффектах (`useEffect`), кастомных хуках:

```jsx
import React, { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://api.example.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### Async/await в Nuxt 3

- Nuxt имеет встроенные composables для асинхронных данных: `useAsyncData`, `useFetch` с автоматической обработкой SSR и CSR. Это делает async/await еще удобнее:

```vue
<script setup>
const { data, pending, error } = await useFetch("/api/posts");

if (error.value) {
  console.error("Ошибка:", error.value);
}
</script>
```

- Можно комбинировать с try/catch и обработкой состояний загрузки вручную.

---

### Особенности async/await

- `await` всегда ожидает промис. Если передать значение, не являющееся промисом, оно вернется сразу.
- Ошибки нужно ловить через `try/catch` внутри `async` функций.
- В Nuxt важно учитывать потерю контекста при использовании async/await в определенных методах; рекомендуются специальные утилиты и хуки для поддержания контекста.
- Для серверного рендеринга (SSR) async/await в Nuxt упрощает загрузку данных до рендера страницы.

---

Если нужно, могу привести примеры реальной интеграции async/await с обработкой состояний загрузки, ошибок, а также примеры из проектов Vue/Nuxt с полноценной настройкой и типами в TypeScript.Async/await — это синтаксический сахар в JavaScript, позволяющий писать асинхронный код в более понятном, линейном стиле. Функция объявляется с ключевым словом `async`, а внутри неё можно использовать `await` для ожидания результата промиса. Это сокращает необходимость в цепочках `.then()` и колбэках, упрощает обработку ошибок через `try/catch` и делает код более читаемым.

---

### Основные преимущества:

- Читаемый и лаконичный код.
- Использование `try/catch` для обработки ошибок, упрощая контроль.
- Автоматический возврат промиса из `async` функции.
- Работа с асинхронными операциями подобно синхронному коду.

---

### Примеры на JavaScript

```js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

fetchData();

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function delayedFunction() {
  console.log("Начало выполнения");
  await delay(2000);
  console.log("Задержка окончена");
}

delayedFunction();
```

---

### Пример с axios

```js
import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

fetchData();
```

---

### Использование в Vue 3

```vue
<script setup>
import { ref } from "vue";

const data = ref(null);
const error = ref(null);

async function loadData() {
  try {
    const res = await fetch("https://api.example.com/items");
    data.value = await res.json();
  } catch (err) {
    error.value = err;
  }
}

loadData();
</script>
```

---

### В React

```jsx
import React, { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://api.example.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### В Nuxt 3

```vue
<script setup>
const { data, pending, error } = await useAsyncData("posts", () =>
  $fetch("/api/posts")
);

if (error.value) {
  console.error("Ошибка:", error.value);
}
</script>
```

- Nuxt предоставляет `useAsyncData` и `useFetch` для удобной интеграции async/await с SSR.
- Важна правильная обработка контекста, особенно в серверных и клиентских хуках.

---

### Особенности и советы

- `await` ожидает промис; если передать обычное значение — оно вернётся сразу.
- Обязательно оборачивайте async-код в `try/catch` для безопасной обработки ошибок.
- В Nuxt контекст иногда теряется после `await` — используйте встроенные утилиты `runWithContext` или `useNuxtApp()` для восстановления.
- Для управления состояниями загрузки и ошибок применяйте реактивные переменные (`ref`/`reactive`), чтобы обновлять UI.

---

Добавляю расширенные примеры и продвинутые паттерны использования async/await в проектах на JavaScript, Vue, React и Nuxt с акцентом на работу с состоянием, ошибками и серверным рендерингом:

---

### 1. Продвинутая обработка состояний загрузки и ошибок во Vue 3

```vue
<script setup>
import { ref } from "vue";

const data = ref(null);
const isLoading = ref(false);
const error = ref(null);

async function loadData() {
  isLoading.value = true;
  error.value = null;
  try {
    const res = await fetch("/api/data");
    if (!res.ok) throw new Error("Ошибка сети");
    data.value = await res.json();
  } catch (e) {
    error.value = e.message || "Ошибка загрузки";
  } finally {
    isLoading.value = false;
  }
}

loadData();
</script>

<template>
  <div v-if="isLoading">Загрузка...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>{{ data }}</div>
</template>
```

---

### 2. Async/await с useEffect и кастомными хуками в React

```jsx
import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}

export default function Users() {
  const { data, loading, error } = useFetch("/api/users");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### 3. Nuxt 3: Асинхронные данные с useAsyncData с расширенной обработкой

```vue
<script setup>
const { data, pending, error, refresh } = await useAsyncData("posts", () =>
  $fetch("/api/posts")
);

if (error.value) {
  console.error("Ошибка загрузки:", error.value);
}

function reload() {
  refresh();
}
</script>

<template>
  <button @click="reload" :disabled="pending">Обновить</button>
  <div v-if="pending">Загрузка...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <ul v-else>
    <li v-for="post in data" :key="post.id">{{ post.title }}</li>
  </ul>
</template>
```

---

### 4. Использование async/await с axios и error boundary в React

```jsx
import React, { Component } from "react";
import axios from "axios";

class ErrorBoundary extends Component {
  state = { hasError: false, message: "" };

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) return <h1>Ошибка: {this.state.message}</h1>;
    return this.props.children;
  }
}

function UsersList() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("/api/users");
        setUsers(res.data);
      } catch (error) {
        throw error;
      }
    }
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <UsersList />
    </ErrorBoundary>
  );
}
```

---

### Итоги

- **Обработка состояний** загрузки и ошибок обязательна для UX.
- В Vue и Nuxt комбинируйте `ref`, `reactive`, `useAsyncData`, `try/catch` для чистого кода.
- В React используйте кастомные хуки и компоненты-контейнеры (ErrorBoundary) для управления async-нагрузкой и ошибками.
- Не забывайте о чистке эффектов и отмене запросов для предотвращения утечек памяти и ошибок.

---

[1](https://purpleschool.ru/knowledge-base/article/nuxt)
[2](https://purpleschool.ru/knowledge-base/article/promised)
[3](https://result.school/roadmap/frontend/article/nuxtjs-osnovy-i-realizaciya)
[4](https://habr.com/ru/articles/812145/)
[5](https://salamba.ru/kak-ispolzovat-async-await-s-komponentami-vue-js/)
[6](https://nuxt.com/docs/api/composables/use-async-data)
[7](https://stackoverflow.com/questions/66192243/how-to-use-async-await-in-nuxt-js)
[8](https://www.youtube.com/watch?v=xWaQc2smLwI)
[9](https://qna.habr.com/q/1046644)
