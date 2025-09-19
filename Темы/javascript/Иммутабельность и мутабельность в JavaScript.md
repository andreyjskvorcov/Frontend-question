
---

# Иммутабельность и мутабельность в JavaScript

В JavaScript данные можно изменять двумя способами: **мутабельно** и **иммутабельно**. Понимание разницы важно при работе с состоянием в React, Redux и других библиотеках.

---

## Мутабельность (mutability)

**Мутабельность** означает, что объект может быть изменён после создания.

```js
const user = { name: 'Alice' };
user.name = 'Bob'; // изменяем напрямую
console.log(user); // { name: "Bob" }
```

Изменения происходят по ссылке, что может приводить к непредсказуемому поведению, особенно если один и тот же объект используется в нескольких местах.

---

## Иммутабельность (immutability)

**Иммутабельность** означает, что объект не изменяется, а при изменениях создаётся новая копия.

```js
const user = { name: 'Alice' };
const updatedUser = { ...user, name: 'Bob' }; // создаём новый объект

console.log(user); // { name: "Alice" }
console.log(updatedUser); // { name: "Bob" }
```

Иммутабельность делает данные предсказуемыми и безопасными для сравнения, что важно при ререндеринге компонентов в React.

---

## Иммутабельность в React

React сравнивает объекты по ссылке (`===`) и не отслеживает изменения внутри объекта.

**Неправильный мутабельный подход:**

```js
state.items.push('newItem');
setState(state); // ссылка не меняется → React не обновит компонент
```

**Правильный иммутабельный подход:**

```js
setState({ ...state, items: [...state.items, 'newItem'] }); // создаём новый массив и объект
```

---

## Сравнение

| Свойство            | Мутабельность              | Иммутабельность                  |
| ------------------- | -------------------------- | -------------------------------- |
| Изменение данных    | Вносится напрямую в объект | Создаётся новая копия            |
| Поведение в React   | Может не вызвать ререндер  | Всегда надежно вызывает ререндер |
| Безопасность данных | Возможны побочные эффекты  | Данные защищены от мутаций       |
| Удобство отладки    | Труднее отслеживать        | Легче отслеживать изменения      |

---

## Примеры иммутабельных операций

```js
// Массивы
const newArr = [...oldArr, newItem];
const filtered = oldArr.filter((item) => item !== target);

// Объекты
const newObj = { ...oldObj, updatedKey: newValue };

// Вложенные объекты
const updated = {
  ...state,
  user: {
    ...state.user,
    name: 'John',
  },
};
```

---

## Вывод

Используйте **иммутабельность**, чтобы код был предсказуемым, безопасным и совместимым с React. Это основа корректной работы `useEffect`, `React.memo`, Redux и других инструментов.

---

Источник: [Иммутабельность и мутабельность в JavaScript — hackfrontend](https://www.hackfrontend.com/docs/general-questions/immunability-and-mutability)

[1](https://www.hackfrontend.com/docs/general-questions/immunability-and-mutability)
[2](https://ru.hexlet.io/blog/posts/mutirovanie-ob-ektov-i-pochemu-vazhna-immutabelnost-v-javascript)
[3](https://habr.com/ru/articles/302118/)
[4](https://proglib.io/p/razbiraem-na-primerah-kak-izbezhat-mutaciy-v-javascript-2020-04-01)
[5](https://sky.pro/wiki/javascript/vazhnost-immutabelnosti-v-java-script-rabota-s-react-js/)
[6](https://gist.github.com/8dffa2054f1f84fed0241cf13036a4ec)
[7](https://www.youtube.com/watch?v=O704OnjrL7o)
[8](https://techrocks.ru/2020/11/13/immutability-in-javascript-explained/)
[9](https://www.youtube.com/watch?v=G1yiSWwIFwE)
