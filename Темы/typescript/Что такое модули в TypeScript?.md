Что такое модули в TypeScript?  
Чем отличаются именованные экспорты от экспорта по умолчанию, как TypeScript работает с модулями JavaScript (CommonJS и ESModules), и как модули используются во фреймворках (Vue, React, Nuxt)?

---

В TypeScript **модули** — это способ организации кода и управления зависимостями в больших проектах.

### 🔹 Основные особенности:

- **Изоляция:** всё, что объявлено внутри файла, скрыто по умолчанию, если не указать `export`.
- **Именованный экспорт (`export`)** → можно экспортировать несколько сущностей (переменные, функции, классы).
- **Экспорт по умолчанию (`export default`)** → файл может отдавать ровно одно главное значение.
- **Импорт (`import`)** → получать данные из других файлов.
- **Типовые импорты/экспорты (`import type`)** → позволяет импортировать **только типы**, исключая их из JS-кода.
- **Совместимость:** TS поддерживает как **ESModules (`import/export`)**, так и **CommonJS (`require/module.exports`)** через `module` в `tsconfig.json`.
- Модули делают код **повторно используемым** и упрощают поддержку.

---

## 📚 Примеры

### 🔹 1. Именованные экспорты

```ts
// moduleA.ts
export const greeting = "Hello!";
export function sayHello() {
  console.log(greeting);
}

// moduleB.ts
import { greeting, sayHello } from "./moduleA";

console.log(greeting); // Hello!
sayHello(); // Hello!
```

---

### 🔹 2. Экспорт по умолчанию

```ts
// math.ts
export default function add(a: number, b: number) {
  return a + b;
}

// app.ts
import add from "./math"; // имя можно выбрать любое
console.log(add(2, 3)); // 5
```

---

### 🔹 3. Импорт только типов

```ts
// types.ts
export interface User {
  id: number;
  name: string;
}

// app.ts
import type { User } from "./types"; // в JS не попадёт

const u: User = { id: 1, name: "Alice" };
```

---

### 🔹 4. CommonJS совместимость

```ts
// config.ts
export const PORT = 3000;

// app.js (Node commonJS)
const { PORT } = require("./config");
```

В TS это контролируется `tsconfig.json` → `"module": "commonjs"` или `"esnext"`.

---

## 📚 Применение во фреймворках

### 🔹 Vue 3 + TS (компоненты и модули)

```vue
<script setup lang="ts">
import { useCounter } from "@/composables/useCounter";

const { count, increment } = useCounter();
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

Здесь `useCounter` — модуль-композабл.

---

### 🔹 React + TS (hook как модуль)

```tsx
// hooks/useCounter.ts
import { useState } from "react";

export default function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  return { count, increment: () => setCount((c) => c + 1) };
}

// App.tsx
import useCounter from "./hooks/useCounter";

function App() {
  const { count, increment } = useCounter();
  return <button onClick={increment}>Clicked: {count}</button>;
}
```

---

### 🔹 Nuxt 3 + TS (автоматический импорт модулей)

```ts
// composables/useAuth.ts
export function useAuth() {
  const user = ref<string | null>(null);
  const login = (name: string) => (user.value = name);
  return { user, login };
}
```

В Nuxt 3 **импорты композаблов автоматические**:

```vue
<script setup lang="ts">
const { user, login } = useAuth();
</script>
```

---

## ✅ Итог

- Модули в TypeScript — ключевой инструмент для организации кода.
- Используются `export` и `export default`, поддерживаются `import type` для типовой информации.
- В отличие от "старых" **namespace**, модули в TS — это прямое продолжение **JavaScript ES Modules**.
- В больших приложениях (Vue/React/Nuxt) модули обычно применяются для компонентов, хуков/композаблов, сервисов и моделей.
