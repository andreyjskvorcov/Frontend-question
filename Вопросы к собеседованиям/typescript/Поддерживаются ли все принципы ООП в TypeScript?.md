Поддерживаются ли все принципы ООП в TypeScript?  
Какие есть отличия реализации принципов ООП в TypeScript по сравнению с классическими языками (например, Java или C++), и как эти возможности используются в реальных проектах (Vue, React, Nuxt)?

---

TypeScript полностью поддерживает основные принципы объектно-ориентированного программирования (ООП):

- **Инкапсуляция:** можно ограничивать доступ к данным через `public`, `private`, `protected`, `readonly`.
- **Наследование:** классы могут расширять (`extends`) другие классы.
- **Полиморфизм:** один и тот же метод может работать по-разному в зависимости от контекста (через `override`, интерфейсы, обобщения/дженерики).
- **Абстракция:** с помощью `abstract` можно задавать "шаблон" поведения для дочерних классов.
- **Интерфейсы:** позволяют определить контракты, которые могут реализовать разные классы.
- **Перегрузка методов:** в TS реализуется через несколько сигнатур функций.
- **Поддержка классов:** есть конструкторы, свойства, статические члены, аксессоры (`get`, `set`).

⚠️ Но есть отличия от Java/C++:

- `private` и `protected` — это **compile-time ограничения** (в JS на рантайме всё равно можно обратиться к свойству).
- Нет "настоящей" перегрузки методов, а только перегрузка сигнатур (runtime остаётся одна реализация).
- Нет полноценной множественной реализации классов, только через **интерфейсы** или композицию.

---

## 📚 Примеры на практике

### 🔹 1. Инкапсуляция

**TypeScript:**

```ts
class User {
  public name: string;
  private password: string;
  protected role: string;

  constructor(name: string, password: string, role: string) {
    this.name = name;
    this.password = password;
    this.role = role;
  }

  checkPassword(pwd: string): boolean {
    return this.password === pwd; // доступно только внутри класса
  }
}

const user = new User("Alice", "1234", "admin");
console.log(user.name); // ✅
// console.log(user.password); // ❌ Ошибка (private)
```

---

### 🔹 2. Наследование + Полиморфизм

```ts
class Animal {
  speak(): void {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  override speak(): void {
    console.log("Woof!");
  }
}

const a: Animal = new Dog();
a.speak(); // "Woof!" (полиморфизм)
```

---

### 🔹 3. Абстракция

```ts
abstract class Shape {
  abstract area(): number; // должен быть реализован в наследниках
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

---

### 🔹 4. Интерфейсы и контракт

```ts
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string): void {
    console.log("Log:", msg);
  }
}
```

---

### 🔹 5. Перегрузка методов

```ts
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.add("Hi ", "TS")); // "Hi TS"
```

---

## 📚 Во фреймворках

### 🔹 Vue 3 + TS (ООП-инкапсуляция)

```ts
// services/UserService.ts
class UserService {
  private token: string | null = null;

  setToken(t: string) {
    this.token = t;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }
}

export const userService = new UserService();
```

В компоненте:

```vue
<script setup lang="ts">
import { userService } from "@/services/UserService";

if (!userService.isAuthenticated()) {
  console.log("Not logged in");
}
</script>
```

---

### 🔹 React + TS (через классовые компоненты)

```tsx
import React from "react";

interface Props {
  title: string;
}

class Header extends React.Component<Props> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default Header;
```

_(хотя в React функц. компоненты популярнее, TypeScript также работает с классами)._

---

### 🔹 Nuxt 3 + TS (сервис через классы)

```ts
// utils/AuthManager.ts
class AuthManager {
  private isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  status(): boolean {
    return this.isLoggedIn;
  }
}

export const authManager = new AuthManager();
```

В Nuxt composable:

```vue
<script setup lang="ts">
import { authManager } from "~/utils/AuthManager";

authManager.login();
console.log("Is logged in?", authManager.status());
</script>
```

---

✅ Итог: В TypeScript **все базовые принципы ООП поддерживаются** (инкапсуляция, наследование, полиморфизм, абстракция и т.д.), но механика немного упрощённая по сравнению с Java или C++. Для Vue, React и Nuxt чаще ООП-подход применяют для сервисов, моделей и бизнес-логики, а не самих компонентов.
