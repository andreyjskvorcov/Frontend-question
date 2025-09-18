Перечислите встроенные типы в TypeScript.  
Какие ещё существуют дополнительные базовые типы кроме стандартных (`number`, `string`, `boolean` и др.), и в чём их практическая польза в реальных проектах (например, во Vue, React или Nuxt)?

---

В TypeScript есть набор встроенных типов, которые расширяют систему типов по сравнению с JavaScript.

**Дополнительно к уже перечисленным:**

- **bigint** — для работы с очень большими числами, выходящими за диапазон `number`.
- **symbol** — уникальные и неизменяемые идентификаторы (часто используются для метаданных или ключей объектов).
- **unknown** — «более безопасная» альтернатива `any`. Требует приведения типа (type narrowing) перед использованием.
- **never** — тип значения, которое никогда не наступает (например, функция, всегда бросающая ошибку или бесконечный цикл).
- **object** — базовый тип всех объектов, кроме примитивов.
- **literal types** — можно ограничить переменную конкретными литералами (`"yes" | "no"` или `1 | 2 | 3`).
- **union (`|`) и intersection (`&`)** — позволяют комбинировать типы.
- **unknown / any** — для динамических или небезопасных случаев.

Эти типы позволяют писать более строгой и предсказуемый код.

---

## 📚 Примеры на практике

### 🔹 Базовые типы JS vs TS

JavaScript:

```js
let price = 100;
price = "сто"; // ❌ ошибка только во время выполнения
```

TypeScript:

```ts
let price: number = 100;
price = "сто"; // ❌ Компилятор не даст присвоить строку
```

---

### 🔹 Кортеж (tuple)

```ts
let user: [string, number];
user = ["Alice", 25]; // ✅
user = [25, "Alice"]; // ❌ Ошибка
```

---

### 🔹 Перечисление (enum)

```ts
enum Role {
  Admin,
  User,
  Guest,
}

let currentRole: Role = Role.Admin;
```

---

### 🔹 Literal types + Union

```ts
type Status = "success" | "error" | "loading";

let state: Status = "success";
state = "pending"; // ❌ Ошибка
```

---

### 🔹 Unknown vs Any

```ts
let dataAny: any = 10;
dataAny = "строка"; // можно всё

let dataUnknown: unknown = "test";
// console.log(dataUnknown.toUpperCase());
// ❌ Ошибка: нужно сузить тип
if (typeof dataUnknown === "string") {
  console.log(dataUnknown.toUpperCase()); // ✅
}
```

---

### 🔹 Never

```ts
function fail(message: string): never {
  throw new Error(message); // функция никогда не возвращает значение
}
```

---

## 📚 Применение во фреймворках

### 🔹 Vue 3 + TypeScript (с литеральными типами)

```vue
<script setup lang="ts">
type Theme = "light" | "dark";

const theme = ref<Theme>("light");

function toggleTheme(newTheme: Theme) {
  theme.value = newTheme;
}

toggleTheme("dark"); // ✅
toggleTheme("blue"); // ❌ ошибка типизации
</script>
```

---

### 🔹 React + Props

```tsx
type ButtonProps = {
  label: string;
  size: "small" | "medium" | "large";
};

const Button = ({ label, size }: ButtonProps) => (
  <button className={size}>{label}</button>
);

// <Button label="Click" size="big" />
// ❌ ошибка: Type '"big"' is not assignable to type '"small" | "medium" | "large"'.
```

---

### 🔹 Nuxt 3 + TypeScript (tuple и enum)

```ts
// composables/useStatus.ts
export enum Status {
  SUCCESS = "success",
  ERROR = "error",
  LOADING = "loading",
}

// tuple для API результата
type ApiResponse = [Status, string?];

export function useStatus(result: ApiResponse) {
  const [status, message] = result;
  return { status, message };
}
```

```vue
<script setup lang="ts">
import { useStatus, Status } from "~/composables/useStatus";

const { status, message } = useStatus([Status.ERROR, "Something went wrong"]);
</script>
```

---

✅ Итог: встроенные типы в TypeScript охватывают не только примитивы (`number`, `string`, `boolean`), но и более сложные конструкции (`tuple`, `enum`, `literal types`, `unknown`, `never`). Они делают код на Vue, React и Nuxt более безопасным за счёт жёсткой системы типов.

---
