Что такое **ограничения и наследование Generics** в TypeScript?  
Как они помогают делать generics более безопасными, чем `any`, какие бывают виды ограничений (`extends`, `keyof`), и как обобщения с ограничениями применяются в реальных проектах (Vue, React, Nuxt)?

---

### 🔹 Ограничения (Constraints)

Generics по умолчанию могут принимать _любой тип_ — как `any`.  
Чтобы ограничить возможные типы → используется `extends`:

```ts
function logLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
```

Теперь `T` должен иметь свойство `length`.

### 🔹 Ограничения через `keyof`

Позволяют «связать» generic с ключами объекта:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

→ K будет только одной из ключей T (`"name" | "age"`).

### 🔹 Наследование generics

Generics могут работать с классами и их наследниками:

```ts
class Animal {
  constructor(public name: string) {}
}
class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

function printAnimal<T extends Animal>(a: T) {
  console.log(a.name);
}

printAnimal(new Dog("Rex")); // ✅
```

---

## 📚 Примеры

### 🔹 1. Ограничение по свойствам

```ts
interface WithId {
  id: number;
}

function printId<T extends WithId>(obj: T) {
  console.log("ID:", obj.id);
}

printId({ id: 5, name: "Alice" }); // ✅
printId({ name: "Bob" }); // ❌ Ошибка, нет id
```

---

### 🔹 2. Ограничение при работе с массивом

```ts
function firstElement<T extends any[]>(arr: T): T[number] {
  return arr[0];
}

const first = firstElement([10, 20, 30]); // number
```

---

### 🔹 3. Ограничение с `keyof`

```ts
type Person = { id: number; name: string };

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let p: Person = { id: 1, name: "Bob" };
getValue(p, "name"); // string
getValue(p, "id"); // number
// getValue(p, "age"); ❌ Ошибка
```

---

### 🔹 4. Наследование классов (Generic + extends)

```ts
class Animal {
  constructor(public name: string) {}
}
class Cat extends Animal {
  meow() {
    console.log(this.name + " meows");
  }
}

function interact<T extends Animal>(a: T) {
  console.log(a.name);
}

const kitty = new Cat("Murka");
interact(kitty); // Murka
```

---

## 📚 Во фреймворках

### 🔹 Vue 3 + TS (composable с ограничениями)

```ts
function useModel<T extends object, K extends keyof T>(obj: T, key: K) {
  return computed({
    get: () => obj[key],
    set: (val) => (obj[key] = val),
  });
}

// использование
const user = reactive({ name: "Alice", age: 30 });
const nameRef = useModel(user, "name");
```

---

### 🔹 React + TS (hook с generics и constraints)

```tsx
import { useState } from "react";

function useForm<T extends object>(initial: T) {
  const [form, setForm] = useState<T>(initial);
  function update<K extends keyof T>(key: K, value: T[K]) {
    setForm({ ...form, [key]: value });
  }
  return { form, update };
}

// использование
const { form, update } = useForm({ name: "Alice", age: 25 });
update("name", "Bob"); // ✅
update("age", 26); // ✅
// update("salary", 500); // ❌ ошибка
```

---

### 🔹 Nuxt 3 + TS (API helper с generic + extends)

```ts
interface ApiResponse {
  success: boolean;
}

async function fetchApi<T extends ApiResponse>(url: string): Promise<T> {
  return await $fetch<T>(url);
}

// использование
interface UserResponse extends ApiResponse {
   { id: number; name: string };
}

const user = await fetchApi<UserResponse>("/api/user");
console.log(user.data.name);
```

---

## ✅ Итог

- **Ограничения Generics (`extends`)** → позволяют уточнить, какие типы допустимы (например, «имеет length»).
- **`keyof` внутри Generics** → гарантирует, что используемые ключи существуют в объекте.
- **Наследование Generics** → позволяет работать с классами и подтипами, сохраняя строгую типизацию.
- В **Vue/React/Nuxt** это широко используют для composables, hooks и API функций, где важно связать структуру данных с параметрами.

---
