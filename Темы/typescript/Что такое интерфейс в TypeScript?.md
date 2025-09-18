Что такое интерфейс в TypeScript и чем он отличается от класса?  
Можно ли использовать интерфейсы только для объектов или они применяются и для функций, массивов, а также во Vue, React и Nuxt?

---

В TypeScript **интерфейс** — это описание структуры:  
он определяет **какие свойства, методы и их типы** должны присутствовать в объекте, функции или классе.

### 🟢 Особенности интерфейсов

- Могут описывать:
  - объекты,
  - массивы,
  - функции,
  - классы (как контракт к реализации).
- Поддерживают **наследование интерфейсов** (`extends`), в том числе множественное.
- Могут объединяться с помощью **объявлений (declaration merging)** — если два интерфейса имеют одно имя, они автоматически объединяются.
- Используются для **контрактов внутри команды** → понятные API, предсказуемая структура данных.

---

### 🔹 Отличия интерфейсов от классов

**Классы:**

- содержат реализацию (методы, поля, конструкторы),
- можно создавать объекты через `new`,
- поддерживают наследование (`extends`).

**Интерфейсы:**

- определяют только форму данных (без реализации),
- используются для типизации (контракт для данных или класса),
- могут наследовать несколько интерфейсов,
- применяются для строгой проверки типов (но не для выполнения кода).

---

## 📚 Примеры

### 🔹 1. Интерфейс для объекта

```ts
interface Person {
  name: string;
  age: number;
  greet(): void;
}

const user: Person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log("Hello, " + this.name);
  },
};
```

---

### 🔹 2. Интерфейс для функции

```ts
interface AddFn {
  (a: number, b: number): number;
}

const sum: AddFn = (x, y) => x + y;
console.log(sum(5, 3)); // 8
```

---

### 🔹 3. Интерфейс для массива

```ts
interface StringArray {
  [index: number]: string;
}

let colors: StringArray = ["red", "green", "blue"];
```

---

### 🔹 4. Интерфейс + класс (контракт)

```ts
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log("Log:", message);
  }
}
```

---

### 🔹 5. Разница: Класс vs Интерфейс

```ts
// Интерфейс только описывает
interface Animal {
  name: string;
  speak(): void;
}

// Класс реализует интерфейс
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " says Woof!");
  }
}

const d = new Dog("Buddy");
d.speak(); // Buddy says Woof!
```

---

## 📚 Примеры во фреймворках

### 🔹 Vue 3 + TS (определение props через интерфейс)

```vue
<script setup lang="ts">
interface Props {
  label: string;
  disabled?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <button :disabled="disabled">{{ label }}</button>
</template>
```

---

### 🔹 React + TS (Props интерфейс)

```tsx
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default function App() {
  return <Button label="Click me" onClick={() => alert("Clicked!")} />;
}
```

---

### 🔹 Nuxt 3 + TS (интерфейс для API)

```ts
// types/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

// composables/useUser.ts
import type { User } from "~/types/User";

export function useUser(): User {
  return { id: 1, name: "Alice", email: "alice@mail.com" };
}
```

Компонент:

```vue
<script setup lang="ts">
import { useUser } from "~/composables/useUser";

const user = useUser();
</script>

<template>
  <p>{{ user.name }} ({{ user.email }})</p>
</template>
```

---

✅ **Итог:**  
В TypeScript интерфейсы — это инструмент для **контрактов и строгой типизации**: они описывают структуру данных, но не её реализацию.  
Классы обеспечивают **реализацию и возможность создавать экземпляры**. В реальных проектах (Vue, React, Nuxt) интерфейсы наиболее часто применяются для: описания props, API-ответов, сервисов и моделей данных.
