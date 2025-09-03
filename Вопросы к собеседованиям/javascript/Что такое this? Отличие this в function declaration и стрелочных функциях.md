## Что такое this?

`this` — это специальное ключевое слово, которое ссылается на объект, в контексте которого выполняется текущий код. В разных ситуациях значение `this` разное и зависит от того, как вызывается функция.

---

## this в function declaration (обычные функции)

- Значение `this` **определяется во время выполнения** функции, в зависимости от способа вызова функции.
- Если функция вызывается как **метод объекта**, `this` указывает на этот объект.
- Если функция вызывается обычным образом (например, просто `func()`), `this` ссылается на **глобальный объект** (`window` в браузере) или `undefined` в строгом режиме (`"use strict"`).
- В конструкторах с `new` из `this` создаётся новый объект.

### Пример 1 (метод объекта):

```js
function sayHello() {
  console.log(this.name);
}

const person = {
  name: "John",
  sayHello: sayHello,
};

person.sayHello(); // Выведет 'John'
```

### Пример 2 (обычная функция):

```js
const greet = person.sayHello;
greet(); // Выведет undefined (или ошибка в strict mode)
```

### Пример 3 (new-конструктор):

```js
function Person(name) {
  this.name = name;
}

const p = new Person("Alice");
console.log(p.name); // Alice
```

---

## this в стрелочных функциях

- **Стрелочные функции не имеют собственного `this`**.
- Значение `this` берётся **лексически из внешнего контекста**, в котором была создана стрелочная функция.
- Это удобно, чтобы "захватить" `this` из окружающего кода, без необходимости писать `const self = this` или использовать `bind`.

### Пример 4 (лексическое this):

```js
const person = {
  name: "John",
  sayHello: function () {
    const greet = () => {
      console.log(this.name); // this берётся из sayHello
    };
    greet();
  },
};

person.sayHello(); // 'John'
```

### Пример 5 (this в стрелочных функциях не меняется):

```js
const person = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  },
};

person.greet(); // undefined, так как лексический this берётся из глобального контекста (window)
```

---

## Особенности и дополнительные методы управления this

- Методы `call`, `apply` и `bind` позволяют **явно задать this** при вызове функции.

```js
function greet() {
  console.log(this.name);
}

const person1 = { name: "Tom" };
const person2 = { name: "Jerry" };

greet.call(person1); // Tom
greet.apply(person2); // Jerry

const boundGreet = greet.bind(person1);
boundGreet(); // Tom
```

---

## Краткое отличие function declaration и arrow function по работы this

| Особенность                      | function declaration                     | arrow function                                                      |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------------------------- |
| Определение значения this        | Во время вызова функции                  | Лексическое: берётся из внешнего контекста                          |
| Может использоваться с new       | Да (конструктор)                         | Нет                                                                 |
| Значение this при обычном вызове | Глобальный объект или undefined в strict | Из внешнего контекста (например, объекта или глобального контекста) |

---

## Повторю важные примеры для закрепления

```js
// 1. Простая функция и объект
function show() {
  console.log(this.value);
}
const obj = { value: 123, show: show };

obj.show(); // 123
const fn = obj.show;
fn(); // undefined (или ошибка в strict)

// 2. Стрелочная функция захватывает this
const obj2 = {
  value: 456,
  show: function () {
    const arrow = () => {
      console.log(this.value);
    };
    arrow();
  },
};
obj2.show(); // 456

// 3. Стрелочная функция напрямую в объекте (плохая практика)
const obj3 = {
  value: 789,
  show: () => {
    console.log(this.value);
  },
};
obj3.show(); // undefined, this ссылается на глобальный объект
```

---

Если нужна более глубокая информация про способы изменения `this` или про особенности в строгом режиме, могу дополнить.

[1](https://doka.guide/js/function-context/)
[2](https://code.mu/ru/javascript/manual/context/this/)
[3](https://wp-kama.ru/note/this-in-js)
[4](https://habr.com/ru/companies/otus/articles/845300/)
[5](https://tokmakov.msk.ru/blog/item/626)
[6](https://thecode.media/this/)
[7](https://purpleschool.ru/knowledge-base/article/this)
[8](https://www.youtube.com/watch?v=FGIdSlK9RhQ)
[9](https://learn.javascript.ru/bind)
[10](https://habr.com/ru/articles/515356/)
