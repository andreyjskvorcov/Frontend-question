Что такое **Generics** в TypeScript?  
Чем они отличаются от использования `any`, какие преимущества дают для написания переиспользуемого и безопасного кода, и как применяются обобщения в реальных проектах (например, во Vue, React или Nuxt)?

---

**Generics** (обобщения) в TypeScript — это механизм, позволяющий создавать компоненты (функции, классы, интерфейсы), работающие с **разными типами данных**, сохраняя при этом строгую типизацию.

### 🔹 Зачем нужны Generics?

- Позволяют **писать универсальный код**, не жертвуя типовой безопасностью.
- Работают лучше, чем `any`: сохраняют типовую связь между аргументами и результатами.
- Используются в коллекциях, хелперах, API функциях, хуках/композаблах.

---

## 📚 Примеры

### 🔹 1. Generic функция

```ts
function identity<T>(arg: T): T {
  return arg;
}

let str = identity("Hello"); // тип string
let num = identity(42); // тип number
```

⚠️ В отличие от `any`, здесь **сохраняется конкретный тип**.

---

### 🔹 2. Generic с массивами

```ts
function getArrayLength<T>(arr: T[]): number {
  return arr.length;
}

console.log(getArrayLength([1, 2, 3])); // 3
console.log(getArrayLength(["a", "b", "c"])); // 3
```

---

### 🔹 3. Generic класс (Stack)

```ts
class Stack<T> {
  private items: T[] = [];
  push(item: T) {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
}

let numStack = new Stack<number>();
numStack.push(10);
numStack.push(20);
console.log(numStack.pop()); // 20

let strStack = new Stack<string>();
strStack.push("A");
strStack.push("B");
console.log(strStack.pop()); // B
```

---

### 🔹 4. Generic интерфейс

```ts
interface Comparable<T> {
  compareTo(other: T): number;
}

class Person implements Comparable<Person> {
  constructor(public name: string, public age: number) {}
  compareTo(other: Person): number {
    return this.age - other.age;
  }
}

let a = new Person("Alice", 25);
let b = new Person("Bob", 30);
console.log(a.compareTo(b)); // -5
```

---

### 🔹 5. Ограничения в Generics (extends)

```ts
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

console.log(getLength([1, 2, 3])); // 3
console.log(getLength("Hello")); // 5
// console.log(getLength(42));        // ❌ Ошибка: number не имеет length
```

---

## 📚 Generics во фреймворках

### 🔹 Vue 3 + TS (generic composable)

```ts
// composables/useFetch.ts
export async function useFetch<T>(url: string): Promise<T> {
  return await $fetch<T>(url);
}

// pages/index.vue
<script setup lang="ts">
interface User { id: number; name: string }

const user = await useFetch<User>("/api/user/1");
console.log(user.name); // ✅ string
</script>
```

---

### 🔹 React + TS (generic hook)

```tsx
import { useState } from "react";

function useArray<T>(initial: T[]) {
  const [array, setArray] = useState<T[]>(initial);
  return { array, push: (item: T) => setArray([...array, item]) };
}

// App.tsx
const { array, push } = useArray<number>([1, 2, 3]);
push(4); // ✅ только number
// push("test"); // ❌ ошибка
```

---

### 🔹 Nuxt 3 + TS (API helper)

```ts
// utils/api.ts
export async function api<T>(endpoint: string): Promise<T> {
  return await $fetch(endpoint);
}

// composables/usePosts.ts
interface Post {
  id: number;
  title: string;
}
export async function usePosts() {
  return await api<Post[]>("/api/posts");
}
```

```vue
<script setup lang="ts">
const posts = await usePosts();
console.log(posts[0].title); // ✅ TS знает, что это string
</script>
```

---

## ✅ Итог

- **Generics = обобщения**: универсальные компоненты с сохранением конкретного типа.
- Отличие от `any`: **Generics сохраняют строгую типизацию** и связь входа/выхода.
- Часто применяются для:
  - универсальных коллекций (`Array<T>`, `Stack<T>`),
  - API-интерфейсов в Nuxt/React/Vue,
  - composables/hooks,
  - классов и интерфейсов с гибкой типизацией.

---
