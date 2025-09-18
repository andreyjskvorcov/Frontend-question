В чём разница между `extends` и `implements` в TypeScript?  
Можно ли класс одновременно расширять другой класс и реализовывать интерфейсы, и как на практике это используется (например, во Vue, React, Nuxt)?

---

В TypeScript ключевые слова **`extends`** и **`implements`** задают разные виды отношений:

### 🔹 `extends`

- Используется для **наследования классов**.
- Один класс может **расширять только один другой класс** (одиночное наследование).
- Дочерний класс получает свойства и методы базового класса.
- Методы родителя можно **переопределять**.
- Работает и с **интерфейсами** → интерфейс может `extends` другой интерфейс (множественно).

---

### 🔹 `implements`

- Используется, чтобы **привязать класс к интерфейсу**.
- Класс может реализовывать **несколько интерфейсов** (множественная реализация).
- Интерфейсы задают только "контракт" (структуру), без реализации.
- `implements` не даёт наследования, только заставляет класс реализовать всё, что описано.

---

### 🔹 Отличие от Java/C#

- В TypeScript **`extends` только для одного класса** (как в Java), но интерфейсы можно множественно расширять.
- Интерфейсы в TS **более гибкие**: их можно "сливать" (`declaration merging`), чего нет в Java (где интерфейс фиксирован).
- `implements` в TS проверяется только **во время компиляции**, на runtime интерефейсы "исчезают".

---

## 📚 Примеры

### 🔹 1. `extends` (наследование классов)

```ts
class Animal {
  constructor(public name: string) {}
  makeSound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks`);
  }
}

const d = new Dog("Buddy");
d.makeSound(); // Buddy barks
```

---

### 🔹 2. `implements` (реализация интерфейсов)

```ts
interface Printable {
  print(): void;
}

interface Identifiable {
  id: number;
}

class Book implements Printable, Identifiable {
  id: number;
  constructor(id: number, public title: string) {
    this.id = id;
  }
  print() {
    console.log(`Book: ${this.title}, ID: ${this.id}`);
  }
}

const b = new Book(1, "TypeScript Handbook");
b.print(); // Book: TypeScript Handbook, ID: 1
```

---

### 🔹 3. Комбинация: `extends` + `implements`

```ts
interface Logger {
  log(msg: string): void;
}

class Base {
  createdAt: Date = new Date();
}

class User extends Base implements Logger {
  constructor(public name: string) {
    super();
  }
  log(msg: string) {
    console.log(`[${this.name}] ${msg}`);
  }
}

const u = new User("Alice");
u.log("Hello!"); // [Alice] Hello!
```

---

## 📚 Применение во фреймворках

### 🔹 Vue 3 + TypeScript (через `vue-class-component`)

```ts
import { Vue } from "vue-class-component";

interface WithAuth {
  isAuthenticated: boolean;
  login(): void;
}

class BaseComponent extends Vue {
  createdAt = new Date();
}

class AuthComponent extends BaseComponent implements WithAuth {
  isAuthenticated = false;
  login() {
    this.isAuthenticated = true;
  }
}
```

---

### 🔹 React + TypeScript (props контракт через интерфейс)

```tsx
interface WithTitle {
  title: string;
}

class Header extends React.Component<WithTitle> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
```

⚡ `implements` в React редко используют явно → чаще передают интерфейсы компонентам через `Props`.

---

### 🔹 Nuxt 3 + TS (сервисы с наследованием и контрактом)

```ts
// services/BaseService.ts
export class BaseService {
  protected url: string;
  constructor(url: string) {
    this.url = url;
  }
}

// services/Logger.ts
export interface Logger {
  log(msg: string): void;
}

// services/UserService.ts
import { BaseService } from "./BaseService";
import type { Logger } from "./Logger";

export class UserService extends BaseService implements Logger {
  constructor() {
    super("/api/users");
  }
  log(msg: string) {
    console.log("[UserService]", msg);
  }
}
```

---

## ✅ Итог

- **`extends` → наследование** (только один класс, но можно расширять интерфейсы множественно).
- **`implements` → контракт интерфейса** (можно несколько интерфейсов).
- В реальных проектах:
  - `extends` используют для сервисов/базовых классов (Vue/React/Nuxt).
  - `implements` используют для структуризации API, моделей, props-контрактов.
