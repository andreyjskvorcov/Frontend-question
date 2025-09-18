Прототип объекта в JavaScript — это объект, от которого другие объекты могут наследовать свойства и методы. Если при обращении к свойству или методу он не найден в текущем объекте, JavaScript автоматически ищет его в прототипе по цепочке прототипов.[1][2][4]

### Что такое прототип

- Прототип — это скрытое свойство объекта (в консоли браузера называется `__proto__`), где хранится ссылка на другой объект. Через эту связь реализуется так называемое прототипное наследование.[5][6]
- Для установки или получения прототипа рекомендуют использовать стандартные методы: `Object.setPrototypeOf(obj, prototype)` и `Object.getPrototypeOf(obj)` вместо прямой работы с `__proto__`.[5]
- Конструктор функции имеет свойство `prototype`, которое используется для установки прототипа экземпляров, создаваемых оператором `new`.[1][5]

### Примеры

#### Прототип через `__proto__`

```js
const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
  __proto__: animal,
};

console.log(rabbit.eats); // true — свойство найдено в animal
```

В этом примере объект `rabbit` не содержит свойства `eats`, но оно находится у его прототипа `animal`, благодаря чему возвращается значение `true`.[2][4][5]

#### Прототип через конструктор

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return `Привет, меня зовут ${this.name}`;
};

const user = new Person('Лена');
console.log(user.sayHello()); // Привет, меня зовут Лена
```

Здесь все объекты, созданные через `new Person`, наследуют метод `sayHello` от `Person.prototype`.[1][5]

#### Прототип через Object.setPrototypeOf

```js
const programs = {
  junior: 'Основы JavaScript',
  middle: 'Продвинутый уровень',
  senior: 'Продвинутая архитектура проекта',
};

const student = {
  name: 'Дмитрий',
  level: 'junior',
};

Object.setPrototypeOf(student, programs);

console.log(student.junior); // Основы JavaScript
```

С помощью `Object.setPrototypeOf` прототип `student` становится объект `programs`, и теперь все свойства последнего доступны первому.[4][5]

### Итоги

- Прототип объекта — это базовый механизм наследования в JavaScript, позволяющий организовывать повторное использование кода и объединять поведение.
- Лучше работать с прототипами через стандартные методы, а не через устаревшее свойство `__proto__`.
- Благодаря прототипам, объекты могут получать доступ к свойствам и методам, определённым вне их собственной структуры, что делает JavaScript гибким для ООП-подхода.[4][5][1]

[1](https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
[2](https://learn.javascript.ru/prototype)
[3](https://habr.com/ru/articles/518360/)
[4](https://learnjs.ru/lessons/prototype/)
[5](https://itchief.ru/javascript/prototypes)
[6](https://goit.global/javascript/ru/v1/module-05/prototypes.html)
[7](https://learn.javascript.ru/prototype-methods)
[8](https://www.hackfrontend.com/docs/javascript/prototype)
[9](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
[10](https://sky.pro/wiki/javascript/prototipnoe-nasledovanie-v-javascript/)
[11](https://doka.guide/js/objects-objects-everywhere/)
[12](https://codechick.io/tutorials/javascript/js-object-prototypes)
