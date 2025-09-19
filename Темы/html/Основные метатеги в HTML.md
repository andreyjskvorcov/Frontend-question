
---

### Что такое метатеги?

Метатеги (`<meta>`) — специальные теги в разделе `<head>`, которые не отображаются напрямую на странице, но передают информацию браузеру, поисковым системам и социальным сетям.

---

### Основные метатеги

---

#### Указание кодировки страницы

```html
<meta charset="UTF-8" />
```

- Обязательный тег для задания кодировки документа.
- Без него возможны проблемы с отображением символов.

---

#### Адаптивная вёрстка (viewport)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- Делает сайт адаптивным для мобильных устройств.
- Без этого тега макет будет «сжат» на маленьких экранах.

---

#### SEO-теги

```html
<meta name="description" content="Краткое описание страницы для поисковиков" />
<meta name="keywords" content="html, метатеги, frontend, seo" />
<meta name="robots" content="index, follow" />
```

- **description** — короткое описание страницы.
- **keywords** — ключевые слова (устаревшие, редко влияют).
- **robots** — поведение поисковых ботов (`index`, `noindex`, `follow`, `nofollow`).

---

#### Автор и язык

```html
<meta name="author" content="Hack Frontend" />
<meta http-equiv="Content-Language" content="ru" />
```

- **author** — имя автора контента.
- **Content-Language** — язык документа.

---

#### Open Graph (OG) — для соцсетей

```html
<meta property="og:title" content="Заголовок страницы" />
<meta property="og:description" content="Описание страницы" />
<meta property="og:image" content="https://site.com/image.png" />
<meta property="og:url" content="https://site.com" />
```

- Используется Facebook, LinkedIn и другими соцсетями для создания превью страницы.

---

#### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Заголовок" />
<meta name="twitter:description" content="Описание" />
<meta name="twitter:image" content="https://site.com/image.png" />
```

- Аналог Open Graph, но для Twitter.

---

#### Безопасность и политика

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
<meta name="referrer" content="no-referrer" />
```

- Контроль совместимости, политики безопасности и рефереров.

---

### Итог

- Метатеги не видны пользователю, но критически важны для SEO, корректного отображения и безопасности.
- Не злоупотребляйте `keywords`, современные поисковики их практически не учитывают.
- Обязательно используйте `description` и Open Graph теги для улучшения ранжирования и отображения страницы в соцсетях.

---

Если нужно, могу помочь с генерацией оптимальных метатегов для проекта Vue.js или React. Хотите?

[1](https://www.hackfrontend.com/docs/html-and-css/metatags)
