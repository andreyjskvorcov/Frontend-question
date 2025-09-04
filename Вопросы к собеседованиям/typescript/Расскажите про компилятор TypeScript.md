Расскажите про компилятор TypeScript.  
Какие у него есть основные возможности, как он работает в связке со сборщиками (Vite, Webpack, Nuxt), и какие типичные сложности возникают при его использовании в реальных проектах?

---

Компилятор TypeScript (`tsc`) — это инструмент, который преобразует код TypeScript в чистый JavaScript, чтобы он мог выполняться в любой среде, где поддерживается JS (браузер, Node.js и др).

**Дополнительно к этому:**

- 📦 **Типизация:** `tsc` проверяет ошибки типов ещё до запуска программы.
- ⚙️ **Настройка:** управление процессом компиляции происходит через файл `tsconfig.json`, где можно указать целевую версию ECMAScript (`target`), модули (`module`), правила для директорий (`include`, `exclude`) и строгие проверки (`strict`).
- 🛠 **Интеграция со сборщиками:** в реальных проектах редко используют голый `tsc`, чаще компиляция встроена в инструменты вроде Vite, Webpack или Nuxt.
- 🚨 **Ограничения:** `tsc` компилирует в JavaScript, но не оптимизирует и не минифицирует код — для этого нужны сборщики (Vite, Webpack).
- ✅ **Режим проверки:** можно использовать только проверку типов без генерации JS (`tsc --noEmit`). Это часто применяют в CI.

---

## 📚 Примеры использования

### 🔹 1. Минимальный пример (JS vs TS)

**JavaScript:**

```js
function greet(name) {
  return "Hello, " + name.toUpperCase();
}

console.log(greet(42)); // "Hello, 42" -> ❌ runtime ошибка
```

**TypeScript:**

```ts
function greet(name: string) {
  return "Hello, " + name.toUpperCase();
}

console.log(greet(42));
// ❌ tsc: Argument of type 'number' is not assignable to parameter of type 'string'.
```

Компилятор ловит ошибку раньше, чем код запустится.

---

### 🔹 2. Запуск компиляции из консоли

```bash
# Компиляция всех файлов проекта по tsconfig.json
tsc

# Компиляция одного файла
tsc app.ts

# Проверка типов без генерации JS
tsc --noEmit
```

---

### 🔹 3. Vue 3 (Vite + TS)

В проектах на Vue с Vite сам `tsc` напрямую не используется для запуска dev-сервера, а работает только как **проверка типов**.

Пример:

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,
    "jsx": "preserve"
  },
  "include": ["src/**/*.ts", "src/**/*.vue"]
}
```

Dev-сервер поднимет Vite, а `tsc --noEmit` проверит типы.

---

### 🔹 4. React (CRA или Vite + TS)

React-компоненты с TS:

```tsx
type Props = { name: string };

function Hello({ name }: Props) {
  return <div>Hello, {name}</div>;
}

// console.log(<Hello name={123} />);
// ❌ ошибка: Type 'number' is not assignable to type 'string'.
```

`tsc` гарантирует правильное использование props до запуска приложения.

---

### 🔹 5. Nuxt 3 + TypeScript

Nuxt использует `tsc` под капотом для проверки, но на самом деле сборку делает Vite.

Пример ошибки при запуске `nuxi dev`:

```ts
const userCount: number = "42";
// ❌ Type 'string' is not assignable to type 'number'
```

Ошибка будет поймана в процессе сборки, хотя все равно код транслируется Vue/Vite.

---

## 📌 Типичные сложности с `tsc`

1. **Долгая компиляция** в больших проектах (особенно monorepo). Решение → `incremental: true` в `tsconfig.json`.
2. **Несовместимые @types** для библиотек → нужно вручную писать `d.ts`.
3. **Лишний шаг в CI/CD:** сначала сборка `tsc`, потом реальный билд (`vite build` / `webpack`).
4. **Проблемы с путями модулей** (`baseUrl`, `paths` в `tsconfig` не всегда совпадают с алиасами сборщика).

---

✅ Итог: Компилятор TypeScript (`tsc`) — это "охранник типов" и транслятор TS → JS.  
Для реальных Vue/React/Nuxt проектов он обычно работает как **статический анализатор типов**, а финальный JavaScript код собирают уже Vite или Webpack.

