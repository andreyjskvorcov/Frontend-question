Что такое **Mapped Types** в TypeScript?  
Какие преобразования типов они позволяют делать (например, `Readonly`, `Partial`, `Pick`), в чём их отличие от обычных типов и `interface`, и как отображаемые типы применяются в реальных проектах (Vue, React, Nuxt)?

---

**Mapped Types (отображаемые типы)** — это инструмент TypeScript, позволяющий **строить новые типы на основе существующих**, перебирая ключи объекта (`keyof`) и применяя к ним определённые правила.

### 🔹 Общий синтаксис

```ts
type NewType<T> = {
  [P in keyof T]: T[P];
};
```

- `P in keyof T` → перебор ключей исходного типа `T`.
- `T[P]` → доступ к типу свойства.
- Можно модифицировать: сделать свойства `readonly`, `optional`, изменить тип значения.

---

## 📚 Примеры

### 🔹 1. Базовый пример

```ts
type Person = { name: string; age: number };

type Stringified<T> = {
  [K in keyof T]: string;
};

type NewPerson = Stringified<Person>;
// { name: string, age: string }
```

---

### 🔹 2. Кастомные условия внутри mapped type

```ts
type Person = { name: string; age: number };

type UpdatedPerson = {
  [K in keyof Person]: K extends "name" ? string : number;
};

const p: UpdatedPerson = { name: "Alice", age: 30 }; // ✅
```

---

### 🔹 3. Добавление `readonly`

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type User = { id: number; name: string };
type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = { id: 1, name: "Bob" };
// user.id = 2; ❌ Ошибка — readonly
```

---

### 🔹 4. Добавление `optional`

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Person = { name: string; age: number };
type PartialPerson = Partial<Person>;
// { name?: string; age?: number }
```

---

### 🔹 5. Utility types построены на mapped types

В TypeScript есть встроенные utility types, которые используют mapped types:

- `Partial<T>` → делает все поля опциональными
- `Required<T>` → делает все обязательными
- `Readonly<T>` → делает все readonly
- `Pick<T, K>` → выбирает только некоторые свойства
- `Record<K, T>` → создаёт объект с ключами `K` и значениями `T`

---

## 📚 Во фреймворках

### 🔹 Vue 3 + TS (props с Partial)

```vue
<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}

// теперь все свойства опциональные
const props = defineProps<Partial<Props>>();
</script>

<template>
  <h1>{{ props.title || "Default" }}</h1>
</template>
```

---

### 🔹 React + TS (компонент с Readonly props)

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

type ReadonlyButtonProps = Readonly<ButtonProps>;

const Button = (props: ReadonlyButtonProps) => (
  <button onClick={props.onClick}>{props.label}</button>
);
```

---

### 🔹 Nuxt 3 + TS (API-модели с Partial и Pick)

```ts
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Только для обновления (все поля кроме id — опциональные)
type UserUpdate = Partial<Omit<User, "id">>;

// Только базовые поля
type UserPreview = Pick<User, "id" | "name">;

const updateUser = (id: number, UserUpdate) => {
  /* ... */
};
```

---

## ✅ Итог

- **Mapped Types = генераторы новых типов на базе старых.**
- Используют `keyof`, `in`, модификаторы (`readonly`, `?`) и условные типы.
- Именно на них построены все **utility types** (`Partial`, `Readonly`, `Pick`, и др.)
- В проектах Vue/React/Nuxt применяются для:
  - типизации **props, API данных, DTO для форм**,
  - создания гибких контрактов (например, update-only типы).

---

🔥 Хочешь, я соберу **таблицу: Utility Types на базе Mapped Types** (Partial / Required / Readonly / Pick / Record) с код-примерами в одну строку для шпаргалки?

Источники
