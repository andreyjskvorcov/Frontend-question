Что такое **утилиты типов (Utility Types)** в TypeScript?  
Какие есть основные встроенные утилиты (`Partial`, `Required`, `Pick`, `Record`, `Omit`, `ReturnType`…), как они реализованы внутри (через mapped types и conditional types), и где применяются в реальных проектах (Vue, React, Nuxt)?

---

**Utility Types (Утилиты)** в TypeScript — это набор встроенных generics для трансформации типов.  
Они позволяют:

- создавать новые типы из существующих,
- модифицировать свойства (сделать `optional`, `readonly`, удалить часть),
- извлекать или комбинировать типы.

Все утилиты построены на базе:

- **Mapped Types** (для перебора свойств),
- **Conditional Types** (для построения логики `extends ? :`).

---

## 📚 Популярные утилиты

### 🔹 `Partial<T>`

Делает все свойства **опциональными**.

```ts
interface Person {
  name: string;
  age: number;
}
const user: Partial<Person> = { name: "Alice" }; // age не обязателен
```

---

### 🔹 `Required<T>`

Делает все свойства обязательными.

```ts
interface Person {
  name?: string;
  age?: number;
}
const user: Required<Person> = { name: "Bob", age: 25 }; // ❌ все обязательны
```

---

### 🔹 `Readonly<T>`

Все поля только для чтения.

```ts
interface Person {
  name: string;
}
const user: Readonly<Person> = { name: "Charlie" };
// user.name = "Other"; ❌ Ошибка
```

---

### 🔹 `Pick<T, K>`

Выбирает только нужные свойства.

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}
const user: Pick<Person, "name" | "email"> = {
  name: "Alice",
  email: "a@mail.com",
};
```

---

### 🔹 `Omit<T, K>`

Удаляет определённые свойства.

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}
const user: Omit<Person, "email"> = { name: "Bob", age: 30 }; // email удалён
```

---

### 🔹 `Record<K, T>`

Создаёт объект с ключами `K` и типами `T`.

```ts
const stock: Record<string, number> = { apple: 10, banana: 5 };
```

---

### 🔹 `ReturnType<T>`

Выводит тип возвращаемого значения функции.

```ts
function getUser() {
  return { id: 1, name: "Alice" };
}
type User = ReturnType<typeof getUser>; // { id: number; name: string }
```

---

### 🔹 `Extract<T, U>` и `Exclude<T, U>`

- `Extract` → получить пересечение типов.
- `Exclude` → исключить значения.

```ts
type A = "a" | "b" | "c";
type B = "a" | "c";
type X = Extract<A, B>; // "a" | "c"
type Y = Exclude<A, B>; // "b"
```

---

## 📚 Примеры во фреймворках

### 🔹 Vue 3 + TS (Partial для props)

```vue
<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}

// все свойства стали необязательны
const props = defineProps<Partial<Props>>();
</script>
```

---

### 🔹 React + TS (Pick для props)

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

type CardProps = Pick<User, "name" | "email">;

const UserCard = ({ name, email }: CardProps) => (
  <div>
    {name} ({email})
  </div>
);
```

---

### 🔹 Nuxt 3 + TS (Omit + Record для API-моделей)

```ts
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// DTO для обновления → без id
type UserUpdateDto = Omit<User, "id">;

// Permissions map → у каждой роли массив разрешений
const permissions: Record<string, string[]> = {
  admin: ["create", "delete"],
  user: ["read"],
};
```

---

## ✅ Итог

- **Utility Types** — встроенные "шорткаты" TS для трансформаций типов.
- Основаны на **Mapped Types + Conditional Types**.
- Самые основные:
  - `Partial`, `Required`, `Readonly`
  - `Pick`, `Omit`, `Record`
  - `ReturnType`, `Extract`, `Exclude`
- В реальных проектах (Vue/React/Nuxt) применяются для:
  - типизации **props и DTO**,
  - API-моделей,
  - работы с формами,
  - автоматического вывода возвращаемых типов функций/композаблов.

---
