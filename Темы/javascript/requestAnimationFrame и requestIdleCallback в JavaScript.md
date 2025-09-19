---
### requestAnimationFrame

Метод браузера, который позволяет выполнить функцию перед следующим перерисовыванием кадра. Основное применение — плавные анимации и оптимизация рендеринга.
---

### Синтаксис

```js
const id = requestAnimationFrame(callback);
```

---

### Пример использования

```js
const box = document.getElementById('box');

function animate(time) {
  box.style.transform = `translateX(${time / 10}px)`;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

---

### Преимущества

- Синхронизация с частотой обновления экрана (обычно 60 FPS).
- Браузер оптимизирует производительность, пропуская кадры в неактивных вкладках.
- Работает лучше, чем `setInterval` или `setTimeout` для анимаций.

---

### requestIdleCallback

Метод, позволяющий выполнять задачи, когда браузер "свободен" — в периоды простоя.

---

### Синтаксис

```js
const id = requestIdleCallback(callback, { timeout: 1000 });
```

---

### Пример использования

```js
const tasks = [
  /* массив задач */
];

requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0 && tasks.length > 0) {
    doTask(tasks.shift());
  }
});
```

Аргумент `deadline` содержит:

- `deadline.timeRemaining()` — сколько миллисекунд осталось до следующего кадра.
- `deadline.didTimeout` — true, если тайм-аут сработал.

---

### Важное

`requestIdleCallback` не поддерживается во всех браузерах (например, Safari), рекомендуются полифилы или fallback на `setTimeout`.

---

### Когда использовать

- `requestAnimationFrame` — анимации, прогресс-бары, слайдеры, Canvas.
- `requestIdleCallback` — неприоритетные задачи, например загрузка вторичных скриптов, аналитика, синхронизация с бэкендом.

---

Если нужно, могу дополнить примерами использования в Vue.js и React. Хотите?
