---
### Наследование в JavaScript

В JavaScript наследование базируется на **прототипах** — объекты ссылаются на прототипы, от которых «наследуют» свойства и методы.

Также в ECMAScript 2015 появился синтаксис классов `class`, который делает наследование более понятным и удобным, сохраняя под капотом прототипное наследование.
---

### 🔹 Прототипное наследование с использованием `prototype`

- Конструктор (функция) создаёт объекты с помощью `new`.
- У объектов есть ссылка на прототип конструктора — `Constructor.prototype`.
- Наследование достигается созданием прототипа дочернего объекта на основе прототипа родителя через `Object.create`.
- Обязательно корректно устанавливать свойство `constructor` после переназначения прототипа.

Пример с комментариями:

```js
function Animal(name) {
  this.name = name;
}

// Метод на прототипе Animal
Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Dog(name, breed) {
  Animal.call(this, name); // Вызов конструктора родителя с контекстом this нового объекта
  this.breed = breed;
}

// Создаем прототип Dog на основе Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
// Восстанавливаем constructor на Dog
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Labrador");
myDog.sayHello(); // Hello, my name is Buddy
myDog.bark(); // Woof!
```

---

### 🔹 Наследование с использованием `class` (ECMAScript 2015 и новее)

- Класс наследует другой класс с помощью ключевого слова `extends`.
- Конструктор дочернего класса вызывает родительский конструктор через `super()`.
- Методы в классах по умолчанию добавляются в прототип.
- Можно переопределять родительские методы и добавлять новые.

Пример с комментариями:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Вызов конструктора родителя
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.sayHello(); // Hello, my name is Buddy
myDog.bark(); // Woof!
```

---

### Дополнения и нюансы

- В прототипном наследовании `Object.create` создаёт чистый объект с указанным прототипом, что часто удобнее, чем напрямую менять `.prototype`.
- Методы внутри `class` автоматически назначаются прототипу, а не напрямую объекту.
- Можно использовать геттеры, сеттеры и статические методы внутри `class`.
- Для большего контроля наследования и поведения объекта можно использовать `Object.setPrototypeOf`.
- `super` в классе можно использовать не только в конструкторе, но и для вызова методов родителя из переопределённых методов дочернего класса.

Пример переопределения с вызовом родительского метода:

```js
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  sayHello() {
    super.sayHello(); // Вызов метода родителя
    console.log("I am a " + this.breed);
  }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.sayHello();
// Hello, my name is Buddy
// I am a Labrador
```

---

Конечно! Дополню с примерами использования `Object.setPrototypeOf` и классического наследования через функции без оператора `new`.

---

### 🔹 Наследование с помощью `Object.setPrototypeOf`

- `Object.setPrototypeOf(obj, prototype)` позволяет явно установить прототип объекта `obj`.
- Это метод динамически меняет прототип объекта, хотя из-за производительности и других нюансов обычно устанавливается один раз при создании объекта.

Пример:

```js
const animal = {
  sayHello() {
    console.log("Hello, my name is " + this.name);
  },
};

const dog = {
  name: "Buddy",
  breed: "Labrador",
};

// Устанавливаем прототип dog равным animal
Object.setPrototypeOf(dog, animal);

dog.sayHello(); // Hello, my name is Buddy
console.log(dog.breed); // Labrador
```

---

### 🔹 Классическое (функциональное) наследование без `new`

- Можно создавать объекты и наследовать без использования `new` и функции-конструкторов, если явно создавать объекты и связывать прототипы.
- Такой подход используют, например, для более явного создания наследуемых объектов.

Пример:

```js
const animal = {
  init(name) {
    this.name = name;
  },
  sayHello() {
    console.log("Hello, my name is " + this.name);
  },
};

const dog = Object.create(animal);

dog.init("Buddy");
dog.breed = "Labrador";
dog.bark = function () {
  console.log("Woof!");
};

dog.sayHello(); // Hello, my name is Buddy
dog.bark(); // Woof!
```

---

### Объяснение

- В этом примере `dog` создаётся через `Object.create(animal)`, прототипом которого является `animal`.
- Метод `init` служит заменой конструктору — инициализирует объект.
- Такой стиль позволяет обходиться без `new`.

---
