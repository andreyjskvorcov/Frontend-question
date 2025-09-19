### Статические методы в JavaScript (Static Methods)

Статические методы — методы, определяемые в классе и доступные только через сам класс, а не через его экземпляры. Используются для реализации функционала, не зависящего от состояния конкретного объекта.

---

### Объявление и использование:

```js
class MathUtils {
  // Статический метод для вычисления суммы двух чисел
  static sum(a, b) {
    return a + b;
  }
}

// Вызов статического метода через имя класса
console.log(MathUtils.sum(5, 7)); // 12

const utils = new MathUtils();
// utils.sum(5, 7); // Ошибка: utils.sum is not a function
```

---

### Применение статических методов:

- Утилитарные функции — независимые операции, например, арифметика, форматирование.
- Фабричные методы — создают экземпляры класса из данных.
- Вспомогательные функции, не зависящие от состояния объекта.

---

### Пример фабричного метода:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Статический метод для создания экземпляра из строки
  static fromString(str) {
    const [name, age] = str.split(', ');
    return new Person(name, parseInt(age, 10));
  }
}

const personData = 'Alice, 30';
const alice = Person.fromString(personData);

console.log(alice.name); // "Alice"
console.log(alice.age); // 30
```

---

### Дополнительные примеры:

```js
// Статическое свойство и метод для подсчёта экземпляров
class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
  }

  static getCount() {
    return Counter.count;
  }
}

new Counter();
new Counter();
console.log(Counter.getCount()); // 2
```

```js
// Использование this внутри статического метода ссылается на класс
class Example {
  static greet() {
    console.log(`Hello from ${this.name}`);
  }
}

Example.greet(); // Hello from Example
```

---

### Итог:

- Статические методы определяются с ключевым словом `static` и принадлежат классу.
- Их нельзя вызвать через экземпляр, только через сам класс.
- Используются для функций, которые не зависят от состояния объектов.
- Позволяют структурировать утилитарный и фабричный код внутри класса.

---

Если нужно, могу добавить примеры использования статических методов с Vue.js и React. Хотите?

[1](https://learn.javascript.ru/static-properties-methods)
[2](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/static)
[3](https://sky.pro/wiki/javascript/staticheskiy-metod-vs-klass-v-java-script-luchshie-praktiki/)
[4](https://www.schoolsw3.com/js/js_class_static.php)
[5](https://learn.javascript.ru/static-properties-and-methods)
[6](https://code.mu/ru/javascript/typescript/book/supreme/oop/static-methods/)
[7](https://purpleschool.ru/knowledge-base/article/static-fields-and-methods)
[8](https://ru.stackoverflow.com/questions/1420290/%D0%9A%D0%B0%D0%BA-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2-%D0%B5%D0%B3%D0%BE-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82)
[9](https://proproprogs.ru/javascript_oop/staticheskie-metody-i-svoystva-klassov)
