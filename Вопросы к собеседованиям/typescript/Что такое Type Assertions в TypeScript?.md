Что такое **Type Assertions** в TypeScript?  
Чем они отличаются от приведения типов (type casting) в Java или C#, какие формы записи доступны (`<type>` и `as`), и когда правильно применять утверждения типов в реальных проектах (например, во Vue, React или Nuxt)?

---

**Type Assertions** (утверждения типа) — это способ «подсказать» компилятору TypeScript, что мы **точно знаем тип переменной**, даже если он не может определить это автоматически.

### 🔹 Особенности:

- Не меняют тип во время **runtime** (в скомпилированном JavaScript их нет).
- Используются **только на этапе компиляции** — помогают IDE и самому TS.
- Работают как «уверенность разработчика» — мы говорим компилятору: «поверь мне, я лучше знаю».
- Синтаксис:
  - `<Type>value`
  - `value as Type` (предпочтительный в JSX/TSX, чтобы не конфликтовать с разметкой).

⚠️ Важно: использовать осторожно. Если указать неверный тип, можно словить баги на runtime (TS ошибки не даст, но приложение рухнет).

---

## 📚 Примеры

### 🔹 1. Простая работа с типами

```ts
let someValue: any = "Hello, TypeScript";

// Угловые скобки
let len1: number = (<string>someValue).length;

// С ключевым словом as
let len2: number = (someValue as string).length;
```

---

### 🔹 2. Отличие от Java/C#

В Java `cast` действительно меняет тип объекта на уровне runtime (с проверкой).  
В TypeScript **type assertion просто игнорируется в JS**:

```ts
let num: unknown = "123";
let val = num as number;
console.log(val); // JS → строка "123", не число
```

---

### 🔹 3. DOM-элементы

```ts
const input = document.querySelector("input") as HTMLInputElement;
input.value = "New text"; // ✅ TS теперь знает, что это input
```

---

### 🔹 4. "Double assertion" (опасный приём)

```ts
let val: unknown = "test";
// Прямое утверждение: ❌ Ошибка
// let num = val as number;

// Хак: "as any as number"
let num = val as any as number;
```

Использовать только если уверены!

---

## 📚 Во фреймворках

### 🔹 Vue 3 + TS (работа с `ref` и DOM)

```vue
<script setup lang="ts">
import { ref, onMounted } from "vue";

const inputEl = ref<null | HTMLInputElement>(null);

onMounted(() => {
  (inputEl.value as HTMLInputElement).focus();
});
</script>

<template>
  <input ref="inputEl" type="text" />
</template>
```

---

### 🔹 React + TS (работа с `useRef`)

```tsx
import React, { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (inputRef.current as HTMLInputElement).focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

---

### 🔹 Nuxt 3 + TS (запрос API, any → типизированный объект)

```ts
type User = { id: number; name: string };

export async function useUser() {
  const raw: any = await $fetch("/api/user/1");
  return raw as User; // утверждаем, что $fetch вернул User
}
```

Компонент:

```vue
<script setup lang="ts">
import { useUser } from "~/composables/useUser";

const user = await useUser();
console.log(user.name); // ✅ TS понимает, что User
</script>
```

---

## ✅ Итог

- **Type Assertions** позволяют явно указывать тип переменной.
- Синтаксис: `<Type>value` или `value as Type`.
- Отличие от приведения типов (cast) в Java/C#: в TS — _только compile-time подсказка_, на runtime типов уже нет.
- Полезно при:
  - работе с DOM,
  - `ref` (Vue/React),
  - API-данными (Nuxt fetch).
- Опасно при неверном указании типа → возможны runtime ошибки.
