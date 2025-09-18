**Массив** в JavaScript — это структура данных, предназначенная для хранения упорядоченного набора элементов, доступных по числовым индексам, начиная с нуля.[1][2][9]

## Характеристики массива

- Массив позволяет хранить множество значений в одной переменной и обращаться к ним по индексу.[2][7][9]
- Поддерживает различные типы данных: строки, числа, булевы значения, объекты, другие массивы.[5][6][10]
- Является особым типом объекта с дополнительным свойством `length`, отражающим количество элементов внутри массива.[9][1][2]

## Основные способы создания массива

- С помощью литерала:
  ```js
  const fruits = ["Apple", "Orange", "Pear"];
  ```
- Через конструктор:
  ```js
  const numbers = new Array(1, 2, 3);
  ```

## Использование массива

- Доступ к элементу массива осуществляется по индексу: `fruits` — первый элемент.[7][8][2][9]
- Перебор массива:
  - Через цикл `for`, `for...of`, методы массива (`forEach`, `map`, `filter`).[4][6][1]
- Массивы предоставляют мощный набор методов для работы с данными — добавление (`push`), удаление (`pop`), сортировка, фильтрация и многое другое.[1][4][5]

## Пример

```js
const guests = ["Маша", "Леонард", "Шелдон", "Джон Сноу"];
console.log(guests); // "Маша"
console.log(guests.length); // 4
```

**Массив** — фундаментальная структура для хранения и обработки коллекций элементов в JavaScript.[10][3][1]

В JavaScript основные методы работы с массивами включают обработку, добавление, удаление, поиск, фильтрацию, преобразование и объединение элементов. Вот список самых популярных методов с примерами:[1][2][7][8]

## Основные методы и их примеры

- **forEach** — перебор элементов без возврата нового массива:

  ```js
  const arr = [1, 2, 3];
  arr.forEach((item) => console.log(item)); // 1 2 3
  ```

- **map** — преобразование каждого элемента и возврат нового массива:

  ```js
  const arr = [1, 2, 3];
  const squares = arr.map((x) => x * x); // [1, 4, 9]
  ```

- **filter** — возвращает новый массив только с элементами, удовлетворяющими условию:

  ```js
  const arr = [1, 2, 3, 4];
  const even = arr.filter((x) => x % 2 === 0); // [2, 4]
  ```

- **reduce** — агрегирует массив в одно значение:

  ```js
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce((acc, val) => acc + val, 0); // 10
  ```

- **find/findIndex** — поиск первого элемента (или его индекса), удовлетворяющего условию:

  ```js
  const arr = [5, 7, 9];
  const found = arr.find((x) => x > 6); // 7
  const idx = arr.findIndex((x) => x > 6); // 1
  ```

- **some/every** — проверка, удовлетворяет ли хоть один (some) или все элементы (every) условию:

  ```js
  arr.some((x) => x > 0); // true
  arr.every((x) => x > 0); // true
  ```

- **push/pop** — добавление/удаление элемента в конец массива:

  ```js
  arr.push(4); // [1, 2, 3, 4]
  arr.pop(); // [1, 2, 3]
  ```

- **shift/unshift** — удаление/добавление элемента в начало массива:

  ```js
  arr.unshift(0); // [0, 1, 2, 3]
  arr.shift(); // [1, 2, 3]
  ```

- **slice/splice** — возвращение части массива (slice) или изменение массива (splice):

  ```js
  const sub = arr.slice(1, 3); // [2, 3]
  arr.splice(1, 2); // [10]
  ```

- **concat** — объединение массивов:

  ```js
  const a = [1, 2],
    b = [3, 4];
  const merged = a.concat(b); // [1, 2, 3, 4]
  ```

- **sort/reverse** — сортировка и обратный порядок:

  ```js
  arr.sort((a, b) => a - b); // [1, 2, 3]
  arr.reverse(); // [3, 2, 1]
  ```

- **includes** — проверка на наличие значения:

  ```js
  arr.includes(2); // true
  ```

- **fill** — заполнение массива значением:

  ```js
  arr.fill(0, 1, 3); // [1, 0, 0, 4, 5]
  ```

- **flat/flatMap** — развертывание вложенных массивов, либо с маппингом:
  ```js
  [
    [1, 2],
    [3, 4],
  ].flat(); // [1, 2, 3, 4]
  arr.flatMap((x) => [x, x]); // [1, 1, 2, 2, 3, 3]
  ```

Эти методы применимы и в современных JavaScript фреймворках (Vue, React, Nuxt), где работа с массивами строится аналогичными способами.[8][1][2][7]

[1](https://learn.javascript.ru/array-methods)
[2](https://habr.com/ru/companies/plarium/articles/483958/)
[3](https://timeweb.cloud/tutorials/javascript/javascript-metody-massivov)
[4](https://skillbox.ru/media/code/metody-massivov-v-javascript-obyasnyaem-na-paltsakh-dlya-novichkov/)
[5](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
[6](https://practicum.yandex.ru/blog/metody-massivov-javascript/)
[7](https://www.cat-in-web.ru/array-methods/)
[8](https://foxminded.ua/ru/metody-massiva-js/)
[9](https://learn.javascript.ru/array)
[10](https://learn.javascript.ru/object)

[1](https://learn.javascript.ru/array)
[2](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
[3](https://purpleschool.ru/knowledge-base/article/array-description)
[4](https://learn.javascript.ru/array-methods)
[5](https://timeweb.cloud/tutorials/javascript/javascript-metody-massivov)
[6](https://practicum.yandex.ru/blog/metody-massivov-javascript/)
[7](https://habr.com/ru/companies/selectel/articles/936586/)
[8](https://dwstroy.ru/video/javascript-s-nulya/javascript-massivy/)
[9](https://doka.guide/js/arrays/)
[10](https://foxminded.ua/ru/metody-massiva-js/)
