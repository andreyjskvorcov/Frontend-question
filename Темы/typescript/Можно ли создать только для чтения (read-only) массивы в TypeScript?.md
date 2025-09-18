Можно ли создать только для чтения (read-only) массивы в TypeScript?  
Какие есть способы сделать массив неизменяемым (`ReadonlyArray<T>` vs `readonly T[]`), в чём их различия, и как такие массивы применяются в реальных проектах (Vue, React, Nuxt)?

---

Да ✅ В TypeScript можно создавать **только для чтения массивы**, используя:

1. **`ReadonlyArray<T>`** — объектный тип, доступный в TS.
2. **`readonly T[]`** — синтаксический шорткат для того же.

### 🔹 Особенности:

- Такой массив нельзя изменять: нельзя делать `push`, `pop`, `splice` и т.п.
- Можно только **читать элементы** или **итерироваться**.
- Это **проверка на этапе компиляции** → в скомпилированном JavaScript массив по-прежнему изменяемый, но компилятор TS не даст вызвать методы мутации.
- Отличие:
  - `ReadonlyArray<T>` чаще применяют для параметров функций.
  - `readonly T[]` короче и удобен внутри классов/интерфейсов.

---

## 📚 Примеры

### 🔹 1. Readonly массив

```ts
let arr: ReadonlyArray<number> = [1, 2, 3];

arr[0]; // ✅ чтение
// arr.push(4); // ❌ Ошибка: Property 'push' does not exist
```

### 🔹 2. Сокращённая запись

```ts
let arr: readonly number[] = [10, 20, 30];

// arr[1] = 100; // ❌ нельзя переписать
console.log(arr[1]); // ✅ 20
```

---

### 🔹 3. В функциях (иммутабельность параметров)

```ts
function printNumbers(nums: ReadonlyArray<number>) {
  // nums.push(42); // ❌ Ошибка
  console.log(nums.join(", "));
}

printNumbers([1, 2, 3]);
```

---

### 🔹 4. В объектах (только чтение массива-свойства)

```ts
interface User {
  name: string;
  readonly roles: string[];
}

const u: User = { name: "Alice", roles: ["admin", "editor"] };

// u.roles.push("user"); // ❌ Ошибка
console.log(u.roles); // ✅
```

---

## 📚 Примеры во фреймворках

### 🔹 Vue 3 + TS (props как readonly массив)

```vue
<script setup lang="ts">
const props = defineProps<{
  items: readonly string[];
}>();
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>
```

Если попытаться изменить `props.items.push("new")`, TS выдаст ошибку.

---

### 🔹 React + TS (props с ReadonlyArray)

```tsx
type ListProps = {
  items: ReadonlyArray<string>;
};

const List = ({ items }: ListProps) => (
  <ul>
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

export default function App() {
  return <List items={["Apple", "Banana", "Orange"]} />;
}
```

---

### 🔹 Nuxt 3 + TS (данные из API как readonly)

```ts
// composables/useCategories.ts
export function useCategories(): readonly string[] {
  return ["Electronics", "Books", "Games"] as const;
}
```

Компонент:

```vue
<script setup lang="ts">
const categories = useCategories();

// categories.push("Other"); // ❌ Ошибка
</script>

<template>
  <div v-for="cat in categories" :key="cat">{{ cat }}</div>
</template>
```

---

## ✅ Итог

- **Да, TS поддерживает read-only массивы.**
- Делать их можно двумя способами:
  - `ReadonlyArray<T>` (универсально),
  - `readonly T[]` (короче).
- Это compile-time гарантия, а не runtime изменение: в чистом JS массив изменяемый.
- В реальных проектах (Vue/React/Nuxt) `readonly` удобно для **props, данных из API, констант, конфигов**, чтобы случайно не мутировать массив.
