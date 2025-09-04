Отлично 💡 Делаем по схеме:
Для чего используются **Enum** в TypeScript?  
Какие бывают типы перечислений (числовые, строковые, смешанные), какие преимущества и ограничения их применения, и как можно использовать Enum в реальных проектах (Vue, React, Nuxt)?

---

**Enum** (перечисление) — это специальный тип данных в TypeScript, позволяющий определить **набор именованных констант**. Их используют:

- для **ограниченного множества вариантов**,
- для понятных «читаемых» значений вместо «магических чисел» или строк,
- для упрощения сравнения и структурирования кода.

---

### 🔹 Виды Enum в TypeScript

1. **Числовые enum** (по умолчанию начинаются с 0):

```ts
enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}
```

2. **Строковые enum** (явно задаются строками):

```ts
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING",
}
```

3. **Гетерогенные enum** (смешанные, редко используются):

```ts
enum Mixed {
  No = 0,
  Yes = "YES",
}
```

4. **const enum** (вычисляются во время компиляции → экономия памяти):

```ts
const enum Direction {
  Up,
  Down,
}

let d: Direction = Direction.Up;
console.log(d); // 0 (скомпилируется в число)
```

---

### ⚠️ Особенности Enum в TypeScript

- Enums **существуют и в рантайме** (в отличие от `type`/union).
- Enum можно итерировать и сравнивать.
- Иногда предпочтительнее **Union типов** (`'success' | 'error'`) — они легче для tree-shaking и не попадают в bundle.

---

## 📚 Примеры

### 🔹 1. Использование в условии

```ts
enum Role {
  Admin,
  User,
  Guest,
}

function checkAccess(role: Role) {
  if (role === Role.Admin) {
    console.log("Access granted");
  } else {
    console.log("Access denied");
  }
}
```

---

### 🔹 2. Строковой Enum

```ts
enum HttpStatus {
  OK = "200_OK",
  NotFound = "404_NOT_FOUND",
}

let status: HttpStatus = HttpStatus.OK;
console.log(status); // "200_OK"
```

---

### 🔹 3. Enum vs Union

```ts
enum OrderStatus {
  Pending = "PENDING",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED",
}

// аналог через union
type OrderStatusType = "PENDING" | "COMPLETED" | "CANCELLED";
```

---

## 📚 Во фреймворках

### 🔹 Vue 3 + TypeScript

```vue
<script setup lang="ts">
enum Theme {
  Light = "light",
  Dark = "dark",
}

const currentTheme = ref<Theme>(Theme.Light);

function toggleTheme() {
  currentTheme.value =
    currentTheme.value === Theme.Light ? Theme.Dark : Theme.Light;
}
</script>

<template>
  <button @click="toggleTheme">{{ currentTheme }}</button>
</template>
```

---

### 🔹 React + TypeScript

```tsx
enum ButtonSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

type ButtonProps = {
  size: ButtonSize;
  label: string;
};

const Button = ({ size, label }: ButtonProps) => (
  <button className={`btn-${size}`}>{label}</button>
);

<Button size={ButtonSize.Medium} label="Click me" />;
```

---

### 🔹 Nuxt 3 + TypeScript (API-ответы)

```ts
enum ApiStatus {
  Success = "success",
  Error = "error"
}

async function fetchData(): Promise<{ status: ApiStatus; data?: string }> {
  return { status: ApiStatus.Success,  "Hello" };
}

// использование
const result = await fetchData();
if (result.status === ApiStatus.Success) {
  console.log(result.data);
}
```

---

## ✅ Итог

- **Enum нужны для группировки констант и создания заранее определённых «наборов значений»**.
- В TS есть числовые, строковые, смешанные и `const enum`.
- Отличие от union: `enum` живёт и в runtime, union — только в compile-time.
- В реальных проектах:
  - Vue → для props с фиксированными значениями.
  - React → для размеров кнопок/вариантов компонента.
  - Nuxt → для кодов статусов API и ролей пользователей.
