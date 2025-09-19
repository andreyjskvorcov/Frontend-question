
---

# Что такое Service Worker?

**Service Worker** — фоновый скрипт, который работает отдельно от основного потока браузера, перехватывает сетевые запросы, управляет кэшированием и обеспечивает офлайн-работу веб-приложений.

Он не имеет доступа к DOM, но может:

- Кэшировать ресурсы
- Обрабатывать сетевые запросы
- Показывать push-уведомления
- Выполнять фоновую синхронизацию данных

---

## Зачем нужен Service Worker?

- Обеспечить офлайн-доступ (Progressive Web Apps)
- Ускорить загрузку через кэширование
- Обработать push-уведомления
- Фоновая синхронизация данных
- Имитация серверного поведения (Mock API)

---

## Жизненный цикл Service Worker

1. **Установка (install)** — загружается и подготавливает кэш.
2. **Активация (activate)** — очищает старые данные, создаёт новый кэш.
3. **Работа (fetch)** — перехватывает и обрабатывает сетевые запросы, управляет кэшированием.
4. **Удаление** — когда Service Worker не нужен, он удаляется из браузера.

---

## Пример регистрации Service Worker

```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => console.log('Service Worker зарегистрирован:', reg))
      .catch((err) => console.error('Ошибка регистрации Service Worker:', err));
  });
}
```

---

## Пример файла sw.js

```js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll(['/index.html', '/styles.css', '/script.js']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
```

---

## Ограничения Service Worker

- Работают только по HTTPS (либо на localhost в dev-режиме).
- Нет доступа к объектам `window`, `document`, `localStorage`.
- Не поддерживаются старыми браузерами.

---

## Как проверить работу Service Worker?

Откройте DevTools → Application → Service Workers:

- Перезарегистрировать Service Worker
- Остановить Service Worker
- Удалить Service Worker

---

## Использование Service Worker с PWA

Service Worker — ключевой элемент Progressive Web App, который:

- Управляет офлайн-режимом
- Кэширует и обновляет ресурсы
- Обеспечивает мгновенную загрузку и фоновую синхронизацию

---

## Важно

Service Workers — мощный, но потенциально опасный инструмент. Всегда используйте правильные стратегии обновления, чтобы избежать кеширования устаревших данных!

---

Источник: [Что такое Service Worker — hackfrontend](https://www.hackfrontend.com/docs/general-questions/service-workers)

[1](https://developer.mozilla.org/ru/docs/Web/API/Service_Worker_API)
[2](https://habr.com/ru/companies/2gis/articles/345552/)
[3](https://www.hackfrontend.com/docs/general-questions/service-workers)
[4](https://www.reddit.com/r/webdev/comments/efa1y6/what_are_web_workers_and_service_workers/)
[5](https://vc.ru/id326339/843437-rabota-s-web-workers-i-service-workers)
[6](https://sky.pro/media/chto-takoe-servis-vorkery-i-kak-ih-ispolzovat-v-veb-prilozheniyah/)
[7](https://flancer32.com/%D0%BA%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-web-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81-service-worker%D0%BE%D0%BC-3c719f6f646e)
[8](https://track.habr.com/frontend/skill/service-worker)
[9](https://developer.mozilla.org/ru/docs/Web/API/Service_Worker_API/Using_Service_Workers)
