Что такое TypeScript и чем он отличается от JavaScript?  
Кроме того, какие преимущества и недостатки TypeScript может иметь при использовании в реальных проектах (например, во Vue, React или Nuxt)?

---

TypeScript — это надмножество JavaScript, которое добавляет строгую типизацию и дополнительные инструменты для организации кода.

**Дополнительно к уже указанному:**

- **Раннее выявление ошибок:** благодаря строгой типизации разработчик получает подсказки и предупреждения от компилятора ещё до запуска кода.
- **Инструменты разработки:** лучшая поддержка IDE (подсказки, автодополнение, навигация по коду).
- **Совместимость:** весь JavaScript является валидным TypeScript-кодом.
- **Недостатки:** дополнительный шаг компиляции, усложнение конфигурации проекта, а также необходимость писать больше кода для типизации.

---

## 📚 Примеры различий на практике

### 🔹 JavaScript

```js
// JavaScript: динамическая типизация
function sum(a, b) {
  return a + b;
}

console.log(sum(5, "10")); // "510", ошибка заметна только во время выполнения
```

---

### 🔹 TypeScript

```ts
// TypeScript: статическая типизация
function sum(a: number, b: number): number {
  return a + b;
}

// console.log(sum(5, "10"));
// ❌ Ошибка: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(sum(5, 10)); // ✅ 15
```

---

### 🔹 Vue 3 (Composition API + TypeScript)

```vue
<script lang="ts" setup>
import { ref } from "vue";

const count = ref<number>(0); // строго указываем тип

function increment(step: number): void {
  count.value += step;
}
</script>

<template>
  <button @click="increment(1)">Count: {{ count }}</button>
</template>
```

В JavaScript (без TS) ошибка вроде `increment("1")` проявилась бы только во время выполнения.

---

### 🔹 React с TypeScript (FC + Props)

```tsx
import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default function App() {
  return (
    <CustomButton
      label="Click me"
      onClick={() => console.log("Hello TS+React!")}
    />
  );
}
```

В JavaScript можно было случайно передать число вместо строки в `label`, с TS это будет ошибка компиляции.

---

### 🔹 Nuxt 3 + TypeScript

```ts
// composables/useCounter.ts
import { ref } from "#imports";

export function useCounter() {
  const count = ref<number>(0);

  function increment(step: number = 1): void {
    count.value += step;
  }

  return { count, increment };
}
```

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
const { count, increment } = useCounter();
</script>

<template>
  <button @click="increment()">Clicked: {{ count }}</button>
</template>
```

❌ Если в Nuxt вызвать `increment("2")`, компилятор выдаст ошибку ещё до запуска проекта.

---

✅ Таким образом, **основная практическая польза TypeScript** — это ловля ошибок на этапе разработки, лучшая читаемость кода и безопасность типов, особенно в крупных проектах на Vue, React и Nuxt.
