Статический метод класса — это метод, который принадлежит самому классу, а не его экземплярам, и может быть вызван только через имя класса. Статические методы используются для создания утилитарных функций, фабричных методов или других операций, которые не зависят от состояния конкретного объекта.[1][2][4][5][8]

### Определение и доступ к статическим методам

- Статические методы определяются с помощью ключевого слова `static` перед именем метода внутри класса.[5][8][1]
- Вызываются только через имя класса, а не через экземпляр — попытка вызвать статический метод через объект приведёт к ошибке.[2][1][5]
- Значение `this` внутри статического метода указывает на сам класс (конструктор), а не на экземпляр.[1]

### Примеры использования

#### Утилитарные функции

```js
class MathUtils {
  static sum(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.sum(5, 3)); // 8
console.log(MathUtils.multiply(4, 2)); // 8

// Ошибка при попытке вызвать через экземпляр
const utils = new MathUtils();
// utils.sum(5, 3); // TypeError: utils.sum is not a function
```

#### Фабричные методы

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static fromString(personStr) {
    const [name, age] = personStr.split(', ');
    return new Person(name, parseInt(age));
  }

  static createAdult(name) {
    return new Person(name, 18);
  }
}

const john = Person.fromString('Иван, 25');
const adult = Person.createAdult('Анна');
console.log(john.name); // Иван
console.log(adult.age); // 18
```

#### Методы сравнения

```js
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

const articles = [
  new Article('HTML', new Date(2023, 1, 1)),
  new Article('CSS', new Date(2023, 0, 1)),
  new Article('JavaScript', new Date(2023, 11, 1)),
];

articles.sort(Article.compare);
console.log(articles[0].title); // CSS
```

#### Счётчики и состояние класса

```js
class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }

  static getCount() {
    return Counter.count;
  }

  static reset() {
    Counter.count = 0;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2
```

### Особенности статических методов

- **Не имеют доступа** к свойствам экземпляра класса, так как не привязаны к конкретному объекту.[4][5]
- **Часто используются** для создания helper-функций, валидации данных, форматирования или других независимых операций.[8][5]
- **Наследуются** дочерними классами и могут быть переопределены.[1]
- **Эквивалентны** присваиванию функции как свойства конструктора: `ClassName.methodName = function() {}`.[1]

### Применение в реальных проектах

Статические методы идеально подходят для создания библиотек утилит (как `Math.max()`, `Array.from()`), валидаторов, парсеров данных и любых функций, которые логически связаны с классом, но не требуют создания экземпляра для работы.[4][5][8]

[1](https://learn.javascript.ru/static-properties-methods)
[2](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/static)
[3](https://proproprogs.ru/javascript_oop/staticheskie-metody-i-svoystva-klassov)
[4](https://sky.pro/wiki/javascript/staticheskiy-metod-vs-klass-v-java-script-luchshie-praktiki/)
[5](https://www.hackfrontend.com/docs/javascript/static-methods)
[6](https://purpleschool.ru/knowledge-base/article/static-fields-and-methods)
[7](https://www.youtube.com/watch?v=Tsr4GvCBPaI)
[8](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)
[9](https://www.schoolsw3.com/js/js_class_static.php)
