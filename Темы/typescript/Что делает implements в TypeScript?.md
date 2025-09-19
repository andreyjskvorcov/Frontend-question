
---

### Что делает `implements` в TypeScript?

`implements` — ключевое слово, которое заставляет класс соответствовать интерфейсу. Это значит, что класс обязан реализовать все свойства и методы, описанные в интерфейсе. Если что-то отсутствует — компилятор TypeScript воспроизводит ошибку.

---

### Синтаксис

```typescript
interface IAnimal {
  name: string;
  makeSound(): void;
}

class Dog implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log('Woof!');
  }
}
```

---

### Что происходит?

- Класс `Dog` обязан реализовать все свойства и методы интерфейса `IAnimal`.
- Пропуск любого требования приводит к ошибке компиляции.

---

### Пример ошибки

```typescript
interface Person {
  name: string;
  age: number;
}

class User implements Person {
  name: string;
  // Ошибка: Property 'age' is missing
}
```

---

### Реализация нескольких интерфейсов

```typescript
interface A {
  a(): void;
}

interface B {
  b(): void;
}

class C implements A, B {
  a() {
    console.log('A');
  }

  b() {
    console.log('B');
  }
}
```

---

### Зачем использовать `implements`?

- Для контроля структуры класса.
- Для явного документирования API.
- Для гарантий соответствия архитектуре.
- Для модульности и повторного использования кода.
- На этапе компиляции — проверка реализации интерфейса (в JavaScript интерфейсов нет).

---

Если нужно, могу подготовить примеры с React/Vue и TypeScript, где используется `implements`. Хотите?

[1](https://htmlacademy.ru/blog/js/types-vs-interfaces)
[2](https://habr.com/ru/sandbox/188148/)
[3](https://www.dev-notes.ru/articles/typescript/typescript-cheatsheet/)
[4](https://scriptdev.ru/guide/029/)
[5](https://my-js.org/docs/cheatsheet/mastering-ts)
[6](https://learn.microsoft.com/ru-ru/archive/msdn-magazine/2015/january/typescript-understanding-typescript)
[7](https://igorfonin.gitbook.io/typescript-book-ru/typescript-type-system/interfaces)
[8](https://habr.com/ru/companies/timeweb/articles/690726/)
[9](https://purpleschool.ru/knowledge-base/article/interfaces)
