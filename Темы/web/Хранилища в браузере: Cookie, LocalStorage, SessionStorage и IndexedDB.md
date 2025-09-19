
---

# Хранилища в браузере: Cookie, LocalStorage, SessionStorage и IndexedDB

В браузере есть несколько встроенных видов хранилищ данных для сохранения состояния пользователя, кэша, настроек и др.

---

## Основные типы хранилищ

| Хранилище      | Объём    | Доступность     | Срок жизни           | Отправляется на сервер | Поддержка    |
| -------------- | -------- | --------------- | -------------------- | ---------------------- | ------------ |
| Cookie         | ~4 KB    | Сервер и клиент | Зависит от Expires   | Да                     | Все браузеры |
| LocalStorage   | ~5–10 MB | Только клиент   | До удаления          | Нет                    | Все браузеры |
| SessionStorage | ~5–10 MB | Только клиент   | Пока открыта вкладка | Нет                    | Все браузеры |
| IndexedDB      | 100+ MB  | Только клиент   | До удаления          | Нет                    | Все браузеры |

---

## Cookie

- Позволяют передавать данные между клиентом и сервером
- Используются для авторизации, сессий, персонализации
- Передаются с каждым HTTP-запросом, поэтому должны быть компактными
- Настраиваются через заголовок `Set-Cookie` или через JavaScript:

```js
document.cookie = 'theme=dark; path=/; max-age=3600';
```

---

## LocalStorage

- Подходит для долгосрочного хранения данных (например, темы, токенов, настроек)
- Доступен только на клиенте
- Данные сохраняются даже после закрытия браузера

```js
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
localStorage.removeItem('theme');
```

---

## SessionStorage

- Похоже на LocalStorage, но данные живут только в рамках одной вкладки
- После закрытия вкладки данные удаляются

```js
sessionStorage.setItem('step', '2');
const step = sessionStorage.getItem('step');
```

---

## IndexedDB

- Асинхронная база данных в браузере для ключ-значение и индексов
- Позволяет хранить структурированные объекты, в том числе файлы
- Идеально подходит для offline-first приложений, PWA, больших данных

```js
const db = indexedDB.open('MyDB', 1);
```

- Используйте удобные библиотеки-обертки, например:
  - [idb](https://github.com/jakearchibald/idb)
  - [Dexie.js](https://dexie.org/)

---

## Когда использовать какое хранилище?

| Сценарий               | Рекомендуемое хранилище                |
| ---------------------- | -------------------------------------- |
| Авторизация, токены    | `cookie` (с флагами Secure + HttpOnly) |
| Настройки пользователя | `localStorage`                         |
| Временные данные       | `sessionStorage`                       |
| Кэш офлайн данных, PWA | `indexedDB`                            |

---

## Безопасность

- Не храните токены доступа в LocalStorage или SessionStorage, чтобы избежать кражи через XSS. Используйте HttpOnly cookie.

---

## Вывод

- Используйте **cookie** для передачи данных между клиентом и сервером
- Используйте **localStorage** для постоянных клиентских данных
- Используйте **sessionStorage** для временных данных в рамках вкладки
- Используйте **IndexedDB** для сложных и больших объёмов данных

---

Источник: [Хранилища в браузере — hackfrontend](https://www.hackfrontend.com/docs/general-questions/storage-in-the-browser)

[1](https://proglib.io/p/6-glavnyh-tehnologiy-dlya-hraneniya-dannyh-v-brauzere-2024-11-08)
[2](https://www.hackfrontend.com/docs/general-questions/storage-in-the-browser)
[3](https://blog.ithillel.ua/ru/articles/cookies-indexeddb)
[4](https://www.youtube.com/watch?v=2Pl9ZwN76bE)
[5](http://prgssr.ru/development/obzor-sredstv-hraneniya-dannyh-na-klientskoj-storone.html)
[6](https://webformyself.com/rukovodstvo-po-razlichnym-tipam-xranilishh-v-brauzere/)
[7](https://fruntend.com/posts/tipy-khranilishch-dlya-nachinayushchikh)
[8](https://doka.guide/tools/browsers-storages/)
[9](https://tyapk.ru/blog/post/an-overview-of-browser-storage)
