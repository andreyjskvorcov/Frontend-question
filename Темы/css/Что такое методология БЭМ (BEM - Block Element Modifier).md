
---

### Что такое методология БЭМ (BEM)

BEM (Block — Element — Modifier) — методология именования CSS-классов, созданная для организации, переиспользования и масштабируемости HTML и CSS кода.

Она помогает избегать конфликтов в стилях, делает код понятным, предсказуемым и удобным для командной работы.

---

### Расшифровка

| Составляющая | Описание                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------ |
| **Block**    | Независимый смысловой компонент. Например, `header`, `button`, `card`.                     |
| **Element**  | Составная часть блока, не имеет смысла вне блока. Например, `button__icon`, `card__title`. |
| **Modifier** | Состояние или вариация блока/элемента. Например, `button--active`, `card__title--large`.   |

---

### Синтаксис BEM

```css
block
block__element
block--modifier
block__element--modifier
```

---

### Пример использования BEM

```html
<div class="card">
  <h2 class="card__title">Заголовок</h2>
  <p class="card__description">Описание карточки</p>
  <button class="card__button card__button--primary">Кнопка</button>
</div>
```

```css
.card {
  padding: 1rem;
  border: 1px solid #ccc;
}

.card__title {
  font-size: 1.25rem;
}

.card__button {
  padding: 0.5rem 1rem;
}

.card__button--primary {
  background-color: blue;
  color: white;
}
```

---

### Преимущества методологии БЭМ

1. **Предсказуемость и читаемость.** Легко понять, где находится элемент и к какому блоку он относится.
2. **Отсутствие конфликтов в стилях.** Классы изолированы и не пересекаются случайно.
3. **Удобство масштабирования.** Особенно важно в больших проектах и командах.
4. **Простота переиспользования.** Блоки легко выносить в библиотеки и компоненты без дополнительных зависимостей.

---

### Недостатки

- Имена классов могут стать длинными и громоздкими.
- Необходима дисциплина и единые правила в команде.
- Иногда сложнее читать при глубокой вложенности.

---

### Когда использовать БЭМ?

- В больших проектах с командной разработкой.
- При использовании чистого CSS или SCSS.
- Чтобы минимизировать каскадность и конфликты в стилях.

---

### Совет

Используйте БЭМ как часть дизайн-системы и архитектуры стилей. Это не только про имена классов, но и структурный подход к организации стилей.

---

Если нужно, могу добавить примеры реализации БЭМ в Vue.js и React, а также чек-листы по соблюдению методологии. Хотите?

[1](https://ru.bem.info/methodology/naming-convention/)
[2](https://habr.com/ru/articles/684170/)
[3](https://ru.bem.info/methodology/css/)
[4](http://yoksel.github.io/easy-markup/bem-rules/)
[5](https://www.hackfrontend.com/docs/html-and-css/bem-methodology)
[6](https://vithar.github.io/bem.info/ru/methodology/naming-convention/)
[7](https://www.qmedia.by/blog/chto_takoe_bem_i_s_chem_ego_edyat.html)
[8](https://proglib.io/p/obuchenie-veb-razrabotke-imenovanie-klassov-i-identifikatorov-metodologiya-bem-2021-01-09)
[9](https://www.youtube.com/watch?v=HSp42cisJzs)
[10](https://nicothin.pro/idiomatic-pre-CSS/)
