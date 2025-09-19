### Set

Set — это коллекция уникальных значений, где каждое значение может появляться только один раз.

Основные методы: add, delete, has, clear, size.

Пример использования Set:

```js
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Игнорируется, так как 2 уже есть в коллекции
console.log(set.has(1)); // true
console.log(set.size); // 2
set.delete(1);
console.log(set); // Set { 2 }
```

**Дополнительный пример:**

```js
// Удаление дубликатов из массива
const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4]
```

---

### Map

Map — это коллекция пар ключ-значение, где ключи могут быть любого типа.

Основные методы: set, get, delete, has, clear, size.

Пример использования Map:

```js
const map = new Map();
map.set('name', 'Иван');
map.set({ id: 1 }, 'Объект');
console.log(map.get('name')); // Иван
console.log(map.size); // 2
map.delete('name');
console.log(map); // Map { { id: 1 } => 'Объект' }
```

**Дополнительный пример:**

```js
// Использование объекта как ключа
const user = { id: 1 };
const userData = new Map();
userData.set(user, 'Данные пользователя');
console.log(userData.get(user)); // Данные пользователя
```

---

### WeakSet

WeakSet — это коллекция только объектов, слабо-ссылаемых.

Основные методы: add, delete, has.

Пример использования WeakSet:

```js
const weakSet = new WeakSet();
let obj = { name: 'Иван' };
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
obj = null; // Объект удалится из WeakSet сборщиком мусора
```

**Дополнительный пример:**

```js
// Отслеживание посещённых объектов
const visited = new WeakSet();
let node = { id: 1 };
visited.add(node);
console.log(visited.has(node)); // true
node = null; // данные о node удалятся при сборке мусора
```

---

### WeakMap

WeakMap — коллекция пар ключ-значение, где ключи — только объекты, слабо-ссылаемые.

Основные методы: set, get, delete, has.

Пример использования WeakMap:

```js
const weakMap = new WeakMap();
let user = { name: 'Иван' };
weakMap.set(user, 'Данные о пользователе');
console.log(weakMap.get(user)); // "Данные о пользователе"
user = null; // объект удаляется сборщиком мусора
```

**Дополнительный пример:**

```js
// Хранение приватных данных объекта
const privateData = new WeakMap();

function createUser(name) {
  const user = { name };
  privateData.set(user, { secret: 'секретный_ключ' });
  return user;
}

const ivan = createUser('Иван');
console.log(privateData.get(ivan)); // { secret: 'секретный_ключ' }
```

---

Если нужен именно такой формат — просто с добавлением примеров и без изменений исходного текста — могу сделать это для любого другого твоего вопроса.
