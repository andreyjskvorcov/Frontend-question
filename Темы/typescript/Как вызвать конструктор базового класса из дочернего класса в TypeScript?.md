Как вызвать конструктор базового класса из дочернего класса в TypeScript?  
Почему важно использовать `super()` в инициализации дочернего класса, какие ошибки возникают при неправильном использовании, и как это применяется в реальных проектах (Vue, React, Nuxt)?

---

В TypeScript (как и в JavaScript ES6) вызов конструктора **базового класса** из дочернего осуществляется через ключевое слово `super()`.

### 🔹 Основные моменты:

- `super()` обязан быть вызван **перед обращением к `this`** в конструкторе дочернего класса.
- `super()` может передавать параметры в конструктор базового класса.
- Если базовый класс имеет конструктор с параметрами, дочерний обязательно должен вызвать `super(...)` и передать значения.
- Можно вызывать также методы базового класса через `super.methodName()`.
- Ошибка: если не вызвать `super()` в классе-наследнике с `constructor`, TypeScript (и JS) выдаст ошибку.

---

## 📚 Примеры

### 🔹 1. Базовый пример (TS)

```ts
class BaseClass {
  constructor(baseProp: string) {
    console.log("Базовый класс:", baseProp);
  }
}

class ChildClass extends BaseClass {
  constructor(baseProp: string, childProp: number) {
    super(baseProp); // вызов конструктора BaseClass
    console.log("Дочерний класс:", childProp);
  }
}

const obj = new ChildClass("Hello", 42);
// Базовый класс: Hello
// Дочерний класс: 42
```

---

### 🔹 2. Ошибка при пропуске `super()`

```ts
class Parent {
  constructor(public name: string) {}
}

class Child extends Parent {
  constructor(name: string) {
    // ❌ Ошибка: 'super' must be called before accessing 'this'
    console.log("Создаём ребёнка");
    super(name);
  }
}
```

---

### 🔹 3. Вызов методов родителя

```ts
class Animal {
  speak() {
    console.log("Животное издаёт звук");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // вызов метода родителя
    console.log("Собака лает");
  }
}

new Dog().speak();
// Животное издаёт звук
// Собака лает
```

---

## 📚 Применение во фреймворках

### 🔹 Vue 3 + TS (расширение классовых компонентов)

```ts
import { Vue } from "vue-class-component";

class BaseComponent extends Vue {
  baseMessage = "Привет из BaseComponent";
  constructor() {
    super();
    console.log(this.baseMessage);
  }
}

class ChildComponent extends BaseComponent {
  constructor() {
    super(); // обязательный вызов
    console.log("Привет от ChildComponent");
  }
}
```

(_В современных Vue 3 редко применяют классовый стиль, но он доступен через `vue-class-component`._)

---

### 🔹 React + TS (классовые компоненты)

```tsx
import React from "react";

class BaseComponent extends React.Component {
  constructor(props: {}) {
    super(props); // вызов конструктора родителя обязателен
    console.log("BaseComponent создан");
  }
}

class ChildComponent extends BaseComponent {
  constructor(props: {}) {
    super(props); // обязательный вызов
    console.log("ChildComponent создан");
  }

  render() {
    return <div>Child Component</div>;
  }
}
```

---

### 🔹 Nuxt 3 + TS (пример сервисов с наследованием)

```ts
// services/BaseService.ts
export class BaseService {
  constructor(public baseUrl: string) {
    console.log("BaseService создан с URL:", baseUrl);
  }
}

// services/UserService.ts
import { BaseService } from "./BaseService";

export class UserService extends BaseService {
  constructor() {
    super("/api/users"); // передаём параметр в базовый конструктор
    console.log("UserService готов");
  }
}
```

Компонент:

```vue
<script setup lang="ts">
import { UserService } from "~/services/UserService";

const service = new UserService();
// Console:
// BaseService создан с URL: /api/users
// UserService готов
</script>
```

---

## ✅ Итог

- `super()` используется для вызова конструктора или методов родительского класса.
- В **TS/JS** вызов `super()` обязателен в дочернем классе **до использования `this`**.
- Ошибка при его игнорировании → `ReferenceError: Must call super constructor before accessing 'this'`.
- В Vue/React/Nuxt `super()` чаще используется в сервисах или при классовом стиле написания компонентов.
