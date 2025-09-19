
---

# Что такое CDN и зачем он нужен?

**CDN (Content Delivery Network)** — распределённая сеть серверов, предназначенная для быстрой доставки статического контента (изображения, стили, скрипты, видео и прочее) пользователям по всему миру.

---

## Суть работы CDN

- Контент сайта кэшируется и дублируется на множестве серверов — так называемых edge-серверов, расположенных в разных географических точках.
- Когда пользователь запрашивает ресурс, он получает его с ближайшего к нему сервера, а не с основного хостинга.

---

## Зачем нужен CDN?

- **Ускорение загрузки**  
  Контент загружается с ближайшего сервера → быстрее рендер и отзывчивость страницы.

- **Снижение нагрузки на основной сервер**  
  CDN раздаёт тяжелые файлы (CSS, JS, шрифты, изображения), освобождая backend.

- **Повышение надёжности**  
  Если один сервер CDN недоступен, пользователь получит ресурс с другого ближайшего доступного.

- **Безопасность**  
  CDN может защищать от DDoS-атак, фильтровать трафик и обеспечивать SSL-шифрование.

---

## Что можно хранить в CDN?

- Статические файлы: `.css`, `.js`, `.html`
- Шрифты (`.woff`, `.ttf`)
- Изображения (`.jpg`, `.png`, `.svg`, `.webp`)
- Видео и аудио
- SPA-бандлы (React, Vue, Angular)

---

## Примеры популярных CDN

- [Google Fonts](https://fonts.google.com)
- [Font Awesome](https://fontawesome.com)
- [Bootstrap CDN](https://getbootstrap.com) и другие.

---

## Пример подключения Bootstrap через CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
/>
```

---

## Факт

Практически все крупные сайты — от YouTube до GitHub — используют CDN, чтобы обеспечить быструю и стабильную доставку данных в любую точку мира.

---

Источник: [Что такое CDN и зачем он нужен — hackfrontend](https://www.hackfrontend.com/docs/general-questions/cdn)

[1](https://habr.com/ru/companies/selectel/articles/463915/)
[2](https://ru.wikipedia.org/wiki/Content_delivery_network)
[3](https://aws.amazon.com/ru/what-is/cdn/)
[4](https://selectel.ru/blog/review-cdn/)
[5](https://timeweb.cloud/blog/chto-takoe-cdn-principy-raboty-content-delivery-network)
[6](https://www.melbicom.ru/blog/whatiscdn/)
[7](https://mws.ru/blog/chto-takoe-cdn/)
[8](https://stormwall.pro/resources/terms/general/cdn)
[9](https://blog.skillfactory.ru/glossary/cdn/)
[10](https://tech.megafon.ru/information/chto-takoe-cdn-i-kak-on-rabotaet)
