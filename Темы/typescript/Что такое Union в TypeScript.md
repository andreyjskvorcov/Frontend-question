
---

### Что такое Union в TypeScript?

Union (объединение) — это тип в TypeScript, который позволяет переменной или параметру функции иметь несколько допустимых типов. Это значит, что значение может быть одного из нескольких типов, перечисленных через оператор `|`.

Union типы делают код более гибким и безопасным, позволяя работать с разными типами данных, обеспечивая при этом строгую проверку типов.

---

### Синтаксис Union

Используется оператор `|` ("или"), чтобы указать несколько допустимых типов.

```typescript
let value: string | number;

value = "Hello"; // допустимо
value = 42; // допустимо
value = true; // ошибка, поскольку тип boolean не указан в Union
```

---

### Пример использования Union типов в функциях

```typescript
function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log("Строка:", val.toUpperCase());
  } else {
    console.log("Число:", val.toFixed(2));
  }
}

printValue("hello"); // Строка: HELLO
printValue(10.5); // Число: 10.50
```

---

### Преимущества Union типов

- Позволяют описывать переменные и параметры, допускающие разные типы, что удобно при работе с API или различными форматами данных.
- Обеспечивают безопасность типов — TypeScript будет ругаться при попытке использования неподходящего типа.
- Делают код более понятным и удобным для поддержки.

---

### Рекомендации

- Используйте Union типы, когда ожидается несколько вариантов типов данных.
- При работе с Union обязательно проверяйте типы во время выполнения для безопасной работы с ними.

---

Если нужны примеры с более сложными Union типами или их использование в React/TypeScript проектах — могу подготовить. Хотите?

[1](https://www.hackfrontend.com/docs/typescript/union)
[2](https://purpleschool.ru/knowledge-base/article/union-types)
[3](https://www.hackfrontend.com/docs/typescript/union)
[4](https://code-basics.com/ru/languages/typescript/lessons/union-types)
[5](https://scriptdev.ru/guide/016/)
[6](https://webformyself.com/typescript-tip-obedineniya/)
[7](https://js-ts-node.github.io/tip-union-v-typescript/)
[8](https://www.youtube.com/watch?v=LKFgiSFeTDU)
[9](https://pmashai.gitbooks.io/typescript-knowledge-book/content/tip-obedinenie.html)
[10](https://habr.com/ru/articles/778060/)
