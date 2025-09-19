---
### Что такое data-атрибуты в HTML

Data-атрибуты — это специальные атрибуты, начинающиеся с `data-`, которые позволяют хранить кастомные данные прямо в HTML-элементах. Они дают возможность связать информацию с элементом, не создавая нестандартных атрибутов и не мешая валидности HTML.
---

### Синтаксис использования

```html
<div data-user-id="1234" data-role="admin">
  Привет, это команда Hack Frontend!
</div>
```

---

### Где применяются data-атрибуты

- Передача данных из HTML в JavaScript
- Инициализация и настройка компонентов
- Хранение пользовательских конфигураций
- Использование при работе с событиями (например, `data-id` у кнопок)
- Делегирование событий для определения нажатого элемента списка

---

### Как получить значение data-атрибута в JavaScript

```html
<button data-product-id="42">Купить</button>

<script>
  const button = document.querySelector('button');
  const productId = button.dataset.productId;
  console.log(productId); // "42"
</script>
```

Все атрибуты `data-*` доступны через свойство `element.dataset` с именами в camelCase (`data-product-id` → `productId`).

---

### Пример использования с делегированием

```html
<ul>
  <li data-id="1">Элемент 1</li>
  <li data-id="2">Элемент 2</li>
  <li data-id="3">Элемент 3</li>
</ul>

<script>
  document.querySelector('ul').addEventListener('click', (e) => {
    const target = e.target;
    const id = target.dataset.id;
    if (id) {
      console.log('Клик по элементу с id:', id);
    }
  });
</script>
```

Здесь `data-id` используется для определения, на какой элемент списка кликнули.

---

### Итог

- Data-атрибуты — мощный и безопасный способ хранить пользовательские данные прямо в HTML.
- Легко читаются и изменяются из JavaScript.
- Позволяют связывать данные и элементы без создания лишних переменных.
- Идеальны для интерактивных компонентов, отслеживания событий и конфигураций.

---

### Совет

Используйте `data-*` для семантически нейтральных, но полезных для скриптов данных, которые не влияют на контент и стили страницы.

---

Если нужны расширенные примеры работы с data-атрибутами в Vue.js или React, могу подготовить. Хотите?Вот дополнение к твоему вопросу и ответу про data-атрибуты в HTML — исходный текст не изменён, только добавлены пояснения и примеры из современных источников:

---

### Что такое data-атрибуты в HTML

Data-атрибуты — это специальные атрибуты, начинающиеся с `data-`, которые позволяют хранить кастомные данные прямо в HTML-элементах. Они дают возможность связать информацию с элементом, не создавая нестандартных атрибутов и не мешая валидности HTML.

---

### Синтаксис использования

```html
<div data-user-id="1234" data-role="admin">
  Привет, это команда Hack Frontend!
</div>
```

---

### Где применяются data-атрибуты

- Передача данных из HTML в JavaScript
- Инициализация и настройка компонентов
- Хранение пользовательских конфигураций
- Использование при работе с событиями (например, `data-id` у кнопок)
- Делегирование событий для определения нажатого элемента списка

---

### Как получить значение data-атрибута в JavaScript

```html
<button data-product-id="42">Купить</button>

<script>
  const button = document.querySelector('button');
  const productId = button.dataset.productId;
  console.log(productId); // "42"
</script>
```

Все атрибуты `data-*` доступны через свойство `element.dataset` с именами в camelCase (`data-product-id` → `productId`).

---

### Пример использования с делегированием

```html
<ul>
  <li data-id="1">Элемент 1</li>
  <li data-id="2">Элемент 2</li>
  <li data-id="3">Элемент 3</li>
</ul>

<script>
  document.querySelector('ul').addEventListener('click', (e) => {
    const target = e.target;
    const id = target.dataset.id;
    if (id) {
      console.log('Клик по элементу с id:', id);
    }
  });
</script>
```

Здесь `data-id` используется для определения, на какой элемент списка кликнули.

---

### Итог

- Data-атрибуты — мощный и безопасный способ хранить пользовательские данные прямо в HTML.
- Легко читаются и изменяются из JavaScript.
- Позволяют связывать данные и элементы без создания лишних переменных.
- Идеальны для интерактивных компонентов, отслеживания событий и конфигураций.

---

### Совет

Используйте `data-*` для семантически нейтральных, но полезных для скриптов данных, которые не влияют на контент и стили страницы.

---

Если нужны расширенные примеры работы с data-атрибутами в Vue.js или React, могу подготовить. Хотите?

[1](https://developer.mozilla.org/ru/docs/Web/HTML/How_to/Use_data_attributes)
[2](https://doka.guide/html/data-attributes/)
[3](https://habr.com/ru/companies/ruvds/articles/490626/)
[4](https://htmlbook.ru/samouchitel-html5/atributy-data)
[5](https://sky.pro/wiki/analytics/kak-ispolzovat-html-atributy-data-polnoe-rukovodstvo-razrabotchiku/)
[6](https://msiter.ru/references/html-reference/global/data)
[7](https://ru.stackoverflow.com/questions/1256259/%D0%9A%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0-%D1%81%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D1%80%D0%B8%D0%BD%D0%B0%D0%B4%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%BE%D0%B2-data-%D0%B2-html)
[8](https://itchief.ru/javascript/jquery-data)
[9](https://appnet.club/reference/html-reference/global-html-attributes/html-attribute-data)
[10](https://html-plus.in.ua/use-data-attributes-in-html-css-javascript-and-jquery/)
