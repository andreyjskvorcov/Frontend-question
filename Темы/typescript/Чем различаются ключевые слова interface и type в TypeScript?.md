Чем различаются ключевые слова `interface` и `type` в TypeScript?  
Какие преимущества и ограничения у каждого, и как их выбирать при работе в реальных проектах (например, во Vue, React или Nuxt)?

---

В TypeScript и `interface`, и `type` используют для описания структуры данных, но есть важные различия.

### 🔹 `interface`

- Может описывать объекты, классы, функции.
- Может **расширять** другие интерфейсы (`extends`).
- Поддерживает **множественное наследование**.
- Может быть реализован классом (`implements`).
- Поддерживает **declaration merging** (если объявить интерфейс с одинаковым именем несколько раз, они объединятся).

### 🔹 `type`

- Более универсален: может описывать не только объекты, но и **объединения (`|`), пересечения (`&`), примитивы, литералы, кортежи, дженерики**.
- Не поддерживает `implements`.
- Не поддерживает "слияние объявлений".
- Чаще подходит для гибких и сложных типов (например, для API-ответов, utility-типы).

👉 На практике:

- Для **контрактов объектов и классов** → использовать `interface`.
- Для **смешанных и сложных комбинаций типов** → применять `type`.

---

## 📚 Примеры

### 🔹 1. Простое определение

```ts
// interface
interface User {
  id: number;
  name: string;
}

// type
type Product = {
  id: number;
  title: string;
};
```

---

### 🔹 2. Расширение vs Пересечение

```ts
// interface → расширение
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

// type → пересечение
type Shape = { color: string };
type Circle = Shape & { radius: number };
```

---

### 🔹 3. Объединение типов (только type)

```ts
type Status = "loading" | "success" | "error";
let s: Status = "loading"; // ✅
```

---

### 🔹 4. Declaration merging (только interface)

```ts
interface Window {
  myCustomProp: string;
}

// где-то ещё в коде
interface Window {
  another: number;
}

// объединятся автоматически
const w: Window = {
  myCustomProp: "test",
  another: 42,
};
```

👉 С `type` так нельзя — будет ошибка.

---

### 🔹 5. Реализация классами (только interface)

```ts
interface Logger {
  log(msg: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string): void {
    console.log(msg);
  }
}
```

---

## 📚 Примеры во фреймворках

### 🔹 Vue 3 + TS (props через interface)

```vue
<script setup lang="ts">
interface Props {
  label: string;
  disabled?: boolean;
}
const props = defineProps<Props>();
</script>
```

### 🔹 Vue 3 + TS (API через type union)

```ts
type ApiResponse =
  | { status: "success"; string }
  | { status: "error"; error: string };

const res: ApiResponse = { status: "error", error: "Not found" };
```

---

### 🔹 React + TS (props: interface или type)

```tsx
// interface вариант
interface ButtonProps {
  text: string;
  onClick: () => void;
}

// type вариант
type LinkProps = {
  href: string;
  text: string;
};

const Button = ({ text, onClick }: ButtonProps) => (
  <button onClick={onClick}>{text}</button>
);
const Link = ({ href, text }: LinkProps) => <a href={href}>{text}</a>;
```

---

### 🔹 Nuxt 3 + TS (модели данных)

```ts
// user интерфейс: используется в классах и сервисах
export interface User {
  id: number;
  name: string;
  email: string;
}

// API тип: гибкое объединение вариантов
export type ApiResult<T> =
  | { success: true; T }
  | { success: false; error: string };
```

---

## ✅ Итог

- **`interface`** → лучше для классов, расширяемых объектов, props. ✨ Плюс работает со "слиянием".
- **`type`** → лучше для примитивов, union/intersection, сложных композиций. ✨ Гибче, чем interface.
