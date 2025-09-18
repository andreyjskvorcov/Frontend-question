Ключевое слово this в JavaScript указывает на объект, который является текущим контекстом выполнения для кода — это может быть глобальный объект (например, window в браузере), объект, чей метод вызван, либо совсем другой объект в зависимости от способа вызова функции.[1][2][7]

### Основные кейсы использования this

- **В глобальном контексте**: this указывает на глобальный объект (window в браузере или global в Node.js).[2][7][1]
- **Внутри функции**: this зависит от способа вызова:
  - В нестрогом режиме при обычном вызове функции — глобальный объект.[5][1]
  - В строгом режиме — undefined.[7][5]
  - При вызове через call/apply можно явно указать контекст.[6]
- **Внутри метода объекта**: this указывает на объект, чей метод был вызван.[1][2]
- **В стрелочных функциях**: this не создаёт собственного контекста и указывает на внешний (лексический) контекст, где функция была объявлена.[2][5][1]
- **В обработчиках событий**: this обычно ссылается на DOM-элемент, вызвавший обработчик.[7]

### Примеры

#### В глобальном контексте

```js
console.log(this); // window (в браузере)
```

#### В функции (обычный вызов)

```js
function foo() {
  console.log(this);
}
foo(); // window (или undefined в строгом режиме)
```

#### В методе объекта

```js
const person = {
  name: 'Иван',
  greet: function () {
    console.log('Привет, ' + this.name + '!');
  },
};
person.greet(); // Привет, Иван!
```

#### Явное управление через call и apply

```js
function hello() {
  console.log(this.title);
}
const obj = { title: 'Пример' };
hello.call(obj); // Пример
```

#### В стрелочных функциях

```js
const obj2 = {
  name: 'Аня',
  show: function () {
    const arrowFunc = () => {
      console.log(this.name);
    };
    arrowFunc();
  },
};
obj2.show(); // Аня
```

#### В обработчике событий

```js
button.addEventListener('click', function () {
  console.log(this); // элемент button
});
```

### Вывод

this определяет текущий контекст исполнения и может меняться в зависимости от того, как вызвана функция или где this используется. Применение this делает код универсальным, но требует понимания его динамического поведения.[5][6][1][2][7]

[1](https://habr.com/ru/companies/ruvds/articles/419371/)
[2](https://purpleschool.ru/knowledge-base/article/this)
[3](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)
[4](https://learn.javascript.ru/object-methods)
[5](https://thecode.media/this/)
[6](https://elbrusboot.camp/blog/kak-rabotaiut-this-call-apply-i-bind-v-java-script-razbiraiemsia-na-primierakh/)
[7](https://wp-kama.ru/note/this-in-js)
[8](https://doka.guide/js/function-context/)
[9](https://www.youtube.com/watch?v=cYx5ckAYhK8)
