Что такое **условные типы (conditional types)** в TypeScript, для чего они используются?  
Как работает ключевое слово `infer`, и как условные типы помогают строить более гибкие generic-типы в реальных проектах (Vue, React, Nuxt)?

---

**Условные типы** в TypeScript — это механизм, позволяющий описывать типы «по условию», по аналогии с `if`/`else`, но на уровне **типов**.

### 🔹 Общий синтаксис

```ts
T extends U ? X : Y
```

- Если `T` совместим с `U`, тип = `X`.
- Иначе тип = `Y`.

### 🔹 Особенности

- Используются с generics для построения сложных правил.
- Могут использовать `infer` для «выведения» типа внутри условного выражения.
- Служат для:
  - **типизации утилит** (`ReturnType<T>`, `Extract<T, U>` и др.),
  - «умных» API-хелперов,
  - вывода типов в зависимости от параметров.

---

## 📚 Примеры

### 🔹 1. Простейший условный тип

```ts
type IsString<T> = T extends string ? true : false;

let a: IsString<string> = true; // ✅
let b: IsString<number> = false; // ✅
```

---

### 🔹 2. Тип для определения "имени типа" (как в вопросе)

```ts
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : "object";

type A = TypeName<string>; // "string"
type B = TypeName<42>; // "number"
type C = TypeName<{}>; // "object"
```

---

### 🔹 3. Использование `infer` (выведение типа)

`infer` позволяет временно «достать» тип из условия:

```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function fn() {
  return 42;
}
type R = ReturnType<typeof fn>; // number
```

---

### 🔹 4. Работа с массивами

```ts
type ElementType<T> = T extends (infer U)[] ? U : never;

type A = ElementType<string[]>; // string
type B = ElementType<number[]>; // number
type C = ElementType<boolean>; // never
```

---

### 🔹 5. Сравнение типов (узкий union)

```ts
type ExcludeType<T, U> = T extends U ? never : T;

type A = ExcludeType<"a" | "b" | "c", "a">; // "b" | "c"
```

---

## 📚 Во фреймворках

### 🔹 Vue 3 + TS (инференция props)

```ts
type ExtractPropType<T> = T extends { type: infer U } ? U : never;

const props = { name: { type: String }, age: { type: Number } };

type PropName = ExtractPropType<(typeof props)["name"]>; // StringConstructor → string
type PropAge = ExtractPropType<(typeof props)["age"]>; // NumberConstructor → number
```

---

### 🔹 React + TS (хук с conditional type)

```tsx
function useStateOrRef<T>(
  initial: T
): T extends object
  ? [T, (val: T) => void]
  : [T, (val: T) => void, () => void] {
  let val = initial;
  const set = (newVal: T) => {
    val = newVal;
  };
  const reset = () => {
    val = initial;
  };

  if (typeof initial === "object") {
    return [val, set] as any;
  }
  return [val, set, reset] as any;
}

// number → получает reset
const [count, setCount, reset] = useStateOrRef(0);

// object → без reset
const [obj, setObj] = useStateOrRef({ x: 1 });
```

---

### 🔹 Nuxt 3 + TS (API response helper)

```ts
type ApiResponse<T> = T extends { error: any }
  ? { success: false; error: T["error"] }
  : { success: true; T };

type User = { id: number; name: string };
type UserError = { error: string };

type Res1 = ApiResponse<User>; // { success: true;  User }
type Res2 = ApiResponse<UserError>; // { success: false; error: string }
```

---

## ✅ Итог

- **Conditional types** — это «if-else» для типов.
- Записываются как `T extends U ? X : Y`.
- Ключевое слово **`infer`** позволяет выводить новые типы из более сложных условий.
- Используются для:
  - обобщений (`ReturnType`, `Exclude` и др.),
  - динамической типизации API,
  - типобезопасных хелперов (Vue props, React hooks, Nuxt API).

---

🔥 Хочешь, я составлю **таблицу популярных встроенных Utility Types (`ReturnType`, `Extract`, `Exclude`, `Partial`, `Pick`)** с пояснением, как они основаны на conditional types?
