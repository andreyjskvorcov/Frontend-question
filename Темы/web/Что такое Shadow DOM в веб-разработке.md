
---

# Что такое Shadow DOM в веб-разработке?

**Shadow DOM** — технология браузера, позволяющая создавать инкапсулированные DOM-деревья внутри элементов.

Она изолирует HTML, CSS и JavaScript, предотвращая конфликты со стилями и скриптами основной страницы.

---

## Зачем нужен Shadow DOM?

1. **Инкапсуляция**  
   Всё внутри Shadow DOM недоступно извне: ни CSS-стили, ни JS-код не влияют на его внутренности.

2. **Изоляция стилей**  
   Стили внутри Shadow DOM не "протекают" наружу, и внешние стили не влияют на внутреннюю структуру.

3. **Чистота компонентов**  
   Shadow DOM делает веб-компоненты более надёжными и независимыми от внешней среды.

---

## Как использовать Shadow DOM?

Создаётся через метод `.attachShadow()`:

```html
<div id="my-element"></div>

<script>
  const host = document.getElementById('my-element');
  const shadow = host.attachShadow({ mode: 'open' });

  shadow.innerHTML = `
    <style>
      p { color: red; }
    </style>
    <p>Привет из Shadow DOM!</p>
  `;
</script>
```

- `mode: "open"` — позволяет получить доступ к `shadowRoot` извне.
- `mode: "closed"` — делает теневое дерево приватным.

---

## Структура Shadow DOM

- **Custom Element** — пользовательский HTML-тег (например, `<my-modal>`).
- **Shadow Root** — корень инкапсулированного DOM-дерева.
- **Shadow DOM Tree** — содержимое компонента (HTML и стили внутри shadow root).
- **Light DOM** — контент, переданный внутрь элемента как обычные дети.

---

## Пример с Web Component

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style>p { color: blue; }</style>
      <p>Я в тени</p>
    `;
  }
}

customElements.define('my-element', MyElement);
```

В HTML:

```html
<my-element></my-element>
```

Компонент отрисуется с изолированными стилями.

---

## Когда использовать Shadow DOM?

- Для Web Components (например, `<my-button>`, `<user-card>`)
- В UI-библиотеках с собственными стилями (избегая конфликтов)
- Для инкапсуляции логики и разметки компонентов

Не обязательно использовать, если:

- Работаете с фреймворками (React, Vue), которые решают изоляцию иначе
- Компоненты не требуют строгой защиты от внешних стилей

---

## Вывод

Shadow DOM — способ создавать изолированные, безопасные компоненты с собственными стилями и структурой. Основа Web Components для инкапсуляции и повторного использования UI.

---

Источник: [Что такое Shadow DOM — hackfrontend](https://www.hackfrontend.com/docs/general-questions/shadow-dom)

[1](https://learn.javascript.ru/shadow-dom)
[2](https://habr.com/ru/companies/otus/articles/779896/)
[3](https://ya.zerocoder.ru/pgt-ponimanie-shadow-dom/)
[4](https://fruntend.com/posts/chto-takoe-shadow-dom)
[5](https://jetschool.az/ru/glossary/term/shadow-dom)
[6](https://www.dev-notes.ru/articles/frontend/virtual-dom-vs-shadow-dom/)
[7](https://isprogfun.dev/posts/2013/shadow-dom/shadow-dom)
[8](https://habr.com/ru/articles/518016/)
[9](https://www.reddit.com/r/webdev/comments/e6b3d3/eli5_what_is_a_shadow_dom_and_should_we_be_using/)
[10](https://learn.javascript.ru/shadow-dom-events)
