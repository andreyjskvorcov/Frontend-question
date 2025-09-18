Поддерживает ли TypeScript перегрузку функций?  
Как именно реализуется перегрузка (чем она отличается от Java или C++), какие есть ограничения, и как перегрузка может применяться в реальных проектах (например, во Vue, React или Nuxt)?

---

Да, TypeScript поддерживает перегрузку функций, но с особенностями:

### 🔹 Как работает перегрузка в TS:

- Объявляется несколько сигнатур функции **без реализации**.
- Следует **одна реализация**, которая охватывает все варианты.
- Компилятор выбирает подходящую сигнатуру при вызове, основываясь на переданных аргументах.

⚠️ Важно:

- В отличие от Java/C++, при компиляции в JS остаётся **только одна реализация**.
- Проверка перегрузки существует только на этапе **компиляции**.
- Вы должны сами внутри функции обрабатывать разный тип аргументов.

---

## 📚 Примеры

### 🔹 1. Классическая перегрузка (из вопроса)

```ts
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

let r1 = combine("Hello", "World"); // string
let r2 = combine(5, 10); // number
```

---

### 🔹 2. Ошибка при неправильном вызове

```ts
combine("Hello", 5); // ❌ Ошибка: нет такой сигнатуры
```

---

### 🔹 3. Перегрузка методов класса

```ts
class Logger {
  log(message: string): void;
  log(code: number): void;
  log(any): void {
    console.log("Log:", data);
  }
}

const logger = new Logger();
logger.log("Hello");
logger.log(404);
```

---

### 🔹 4. JS vs TS

**JavaScript:**

```js
function add(a, b) {
  return a + b; // runtime поведение зависит от аргументов
}
```

**TypeScript с перегрузкой:**

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any) {
  return a + b;
}
```

→ В JS перегрузок нет: просто runtime-логика. В TS — compile-time проверка.

---

## 📚 Применение во фреймворках

### 🔹 Vue 3 + TS (перегруженная "универсальная" функция)

```ts
// utils/format.ts
export function format(value: number): string;
export function format(value: Date): string;
export function format(value: any): string {
  if (typeof value === "number") return `$${value.toFixed(2)}`;
  if (value instanceof Date) return value.toISOString();
  return String(value);
}
```

```vue
<script setup lang="ts">
import { format } from "@/utils/format";

const price = format(100); // "$100.00"
const date = format(new Date()); // "2025-09-04T..."
</script>
```

---

### 🔹 React + TS (обработка props)

```tsx
type InputProps =
  | { type: "text"; value: string }
  | { type: "number"; value: number };

function Input(props: InputProps) {
  return <input type={props.type} value={props.value} />;
}

<Input type="text" value="Hello" />   // ✅
<Input type="number" value={42} />    // ✅
<Input type="text" value={42} />      // ❌ Ошибка (перегрузка через union)
```

---

### 🔹 Nuxt 3 + TS (API перегрузка)

```ts
// composables/useApi.ts
type ApiData = { id: number; name: string };

export function useApi(id: number): Promise<ApiData>;
export function useApi(url: string): Promise<ApiData>;
export function useApi(param: any): Promise<ApiData> {
  if (typeof param === "number") {
    return $fetch(`/api/user/${param}`);
  }
  return $fetch(param);
}
```

```vue
<script setup lang="ts">
const data1 = await useApi(1); // ищем по id
const data2 = await useApi("/api/me"); // ищем по url
</script>
```

---

## ✅ Итог

- **TypeScript перегрузку поддерживает, но только на этапе компиляции.**
- Реализация всегда одна, просто типизация разная.
- В отличие от Java/C++ перегрузка не существует в runtime.
- Использовать удобно для API, утилитных функций, обработчиков (форматирование, логирование).
