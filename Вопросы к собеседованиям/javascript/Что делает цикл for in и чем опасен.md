Цикл **for...in** в JavaScript используется для перебора _всех перечисляемых свойств_ объекта, включая свойства, унаследованные по прототипу. На каждой итерации переменная в цикле получает имя текущего свойства объекта.

Пример:

```js
const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}
// Выведет:
// a 1
// b 2
```

Чем опасен цикл **for...in**:

- Перебирает и _унаследованные свойства прототипа_, что может привести к нежелательным эффектам.
- Перебор свойств происходит в произвольном порядке, что может быть нежелательно.
- Не подходит для перебора массивов, так как ключи — это строки, а индексный порядок не гарантируется.

Для перебора массива лучше использовать обычный **for** или **for...of**, а для объекта с контролем над собственными свойствами — проверять их через `hasOwnProperty`.

Итого, цикл **for...in** удобен для перебора свойств объекта, но требует осторожности из-за возможного перебора унаследованных и нестандартного порядка обхода.[1][4][6][9]

[1](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in)
[2](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for)
[3](https://learn.javascript.ru/while-for)
[4](https://doka.guide/js/for-in/)
[5](https://highload.tech/tsikl-for-v-javascript-sintaksis-i-primery-ispolzovaniya/)
[6](https://itchief.ru/javascript/loops)
[7](https://codechick.io/tutorials/javascript/js-for-of)
[8](https://purpleschool.ru/knowledge-base/article/for-of)
[9](https://purpleschool.ru/knowledge-base/article/for-in)
