Объект в JavaScript — это сложная структура данных, предназначенная для хранения коллекций значений и организации более сложных сущностей, чем примитивные типы данных. Каждый объект представляет собой набор пар «ключ: значение», где ключом обычно выступает строка или символ, а значением может быть любой тип данных, включая другие объекты и функции.[1][2][3][4][7][9]

## Основные характеристики объекта

- **Ассоциативный массив**: позволяет хранить данные в формате пар «ключ: значение».[5][1]
- **Свойства**: значения, привязанные к именам внутри объекта, описывают его характеристики.[2][3]
- **Методы**: функции, хранящиеся внутри объектов, называются методами и предоставляют поведенческие возможности.[7][2]

## Примеры создания и использования объекта

### Обычный JavaScript (JS)

```js
const user = {
  name: "Вася",
  age: 29,
  greet: function () {
    console.log(`Привет, меня зовут ${this.name}`);
  },
};
// Доступ к свойству:
console.log(user.name); // "Вася"
user.greet(); // "Привет, меня зовут Вася"
```

### Vue.js

```vue
<script>
export default {
  data() {
    return {
      user: {
        name: "Вася",
        age: 29,
      },
    };
  },
  methods: {
    greet() {
      console.log(`Привет, меня зовут ${this.user.name}`);
    },
  },
};
</script>
```

### React

```jsx
function UserInfo() {
  const user = { name: "Вася", age: 29 };
  return (
    <div>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
    </div>
  );
}
```

### Nuxt.js

```js
export default {
  data() {
    return {
      user: {
        name: "Вася",
        age: 29,
      },
    };
  },
  methods: {
    greet() {
      alert(`Привет, меня зовут ${this.user.name}`);
    },
  },
};
```

## Особенности

- Доступ к свойствам возможен через точку (object.property) или скобки (object["property"]).[1][9][2]
- Объекты могут быть созданы с помощью литеральной записи `{}`, конструктора `new Object()`, функций-конструкторов или `Object.create()`.[11][1]
- Многие встроенные структуры (Array, Date, Error) — это расширенные объекты с дополнительными возможностями.[4][1]

**Объект** — это основа для хранения и структурирования данных в JavaScript, используемая во всех фреймворках и приложениях.[4][7][2]

Основные методы работы с объектами в JavaScript позволяют создавать, изменять, объединять, сравнивать и перебирать свойства объектов, а также взаимодействовать с их содержимым. Вот список популярных методов с примерами:[1][5][6]

## Статические методы объекта Object

- **Object.keys(obj)** — возвращает массив ключей объекта:

  ```js
  const user = { name: "Аня", age: 22 };
  console.log(Object.keys(user)); // ["name", "age"]
  ```

- **Object.values(obj)** — возвращает массив значений свойств объекта:

  ```js
  console.log(Object.values(user)); // ["Аня", 22]
  ```

- **Object.entries(obj)** — возвращает массив пар [ключ, значение]:

  ```js
  console.log(Object.entries(user)); // [["name", "Аня"], ["age", 22]]
  ```

- **Object.assign(target, ...sources)** — копирует свойства из исходных объектов в целевой:

  ```js
  const a = { x: 1 },
    b = { y: 2 },
    c = Object.assign({}, a, b);
  console.log(c); // {x: 1, y: 2}
  ```

- **Object.create(proto, [propertiesObject])** — создание нового объекта с заданным прототипом:
  ```js
  const person = {
    greet() {
      console.log("Hello!");
    },
  };
  const admin = Object.create(person);
  admin.greet(); // "Hello!"
  ```

## Перебор свойств объекта

- **for...in** — перебор всех перечисляемых свойств объекта:
  ```js
  for (let key in user) {
    console.log(key, user[key]);
  }
  // "name" "Аня"
  // "age" 22
  ```

## Сравнение и объединение

- **Object.is(a, b)** — проверяет идентичность двух значений (альтернатива === для спец. случаев NaN и -0):

  ```js
  Object.is(NaN, NaN); // true
  ```

- **Spread-оператор** (ES6+) — объединение объектов:
  ```js
  const a = { x: 1 },
    b = { y: 2 },
    c = { ...a, ...b };
  console.log(c); // {x:1, y:2}
  ```

## Пример добавления метода объекту

- Обычным способом:

  ```js
  const car = {
    model: "Toyota",
    drive() {
      console.log("В движении");
    },
  };
  car.drive(); // "В движении"
  ```

- Через прототип:
  ```js
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.speak = function () {
    console.log(this.name + " шумит");
  };
  const dog = new Animal("Шарик");
  dog.speak(); // "Шарик шумит"
  ```

Эти методы — основа для эффективной работы с объектами практически в любом проекте JavaScript.[1][6][5]

[1](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_objects)
[2](https://learn.javascript.ru/object-methods)
[3](https://elbrusboot.camp/blog/obiekty-v-javascript/)
[4](https://learn.javascript.ru/object)
[5](https://www.8host.com/blog/metody-obektov-v-javascript/)
[6](https://skillbox.ru/media/code/javascript-objects/)
[7](https://foxminded.ua/ru/javascript-obekt/)
[8](https://doka.guide/js/object/)
[9](https://pc.uz/article/10988-javascript-primery-raboty-s-obektami)
[10](http://profil.adu.by/mod/book/view.php?id=4251&chapterid=13203)

[1](https://learn.javascript.ru/object)
[2](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_objects)
[3](https://doka.guide/js/object/)
[4](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object)
[5](https://proglib.io/p/uchebnik-po-javascript-rabota-s-obektami-2022-08-07)
[6](https://habr.com/ru/articles/486820/)
[7](https://elbrusboot.camp/blog/obiekty-v-javascript/)
[8](https://itvdn.com/ru/blog/article/300-js)
[9](https://habr.com/ru/companies/wirex/articles/419193/)
[10](https://proglib.io/p/10-voprosov-s-sobesedovaniy-po-javascript-2022-02-01)
[11](https://foxminded.ua/ru/javascript-obekt/)
