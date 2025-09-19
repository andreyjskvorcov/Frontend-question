
---

# Что такое Critical Rendering Path (CRP) в браузере

---

## Что такое Critical Rendering Path (CRP)?

**Critical Rendering Path (CRP)** — это последовательность шагов, которые браузер выполняет для преобразования HTML, CSS и JavaScript в пиксели на экране.

Проще говоря, это путь от получения HTML до отображения страницы пользователю.

**Цель CRP** — минимизировать время, необходимое для отображения первого полезного контента (First Contentful Paint, FCP).

---

## Этапы CRP

1. **Парсинг HTML**  
   Браузер считывает HTML и создаёт DOM-дерево.

2. **Загрузка и парсинг CSS**  
   CSS блокирует рендеринг — пока стили не загружены и не обработаны, браузер не может отрисовать страницу. Формируется CSSOM (CSS Object Model).

3. **Создание Render Tree**  
   Объединение DOM и CSSOM в Render Tree — дерево видимых элементов с применёнными стилями.

4. **Layout (или Reflow)**  
   Браузер рассчитывает размеры и позиции всех элементов страницы.

5. **Painting**  
   Элементы из Render Tree превращаются в пиксели на экране.

6. **Composite & Display**  
   Финальная сборка слоёв, их отрисовка и отображение пользователю.

---

## Визуализация процесса

- HTML → DOM
- CSS → CSSOM
- DOM + CSSOM → Render Tree
- Layout
- Paint
- Composite & Display

---

## Почему это важно?

CRP влияет на:

- Время загрузки и отображения первого полезного контента (FCP)
- Восприятие скорости пользователем
- SEO и показатели Core Web Vitals

---

## Что блокирует рендеринг?

- **CSS-файлы** — необходимы для построения Render Tree.
- **JavaScript**, загружаемый без атрибутов `defer` или `async`, блокирует парсинг HTML.
- Большие изображения и шрифты, загружаемые синхронно.

---

## Как оптимизировать CRP?

| Метод                    | Пояснение                                     |
| ------------------------ | --------------------------------------------- |
| `defer` / `async`        | Уменьшает блокировку HTML-парсинга            |
| Минификация и сжатие     | CSS, JS, HTML                                 |
| Критический CSS inline   | Встраивание минимального CSS прямо в `<head>` |
| Lazy-loading             | Отложенная загрузка изображений и блоков      |
| Шрифты с `display: swap` | Ускоряют отображение текста                   |

---

## Совет

Анализируйте CRP с помощью инструментов:

- Lighthouse
- Chrome DevTools
- WebPageTest

Это поможет выявить и устранить узкие места при рендеринге.

---

## Вывод

CRP — критически важен для быстрой загрузки и отображения страницы.  
Оптимизация CRP повышает производительность и улучшает пользовательский опыт.

Минимизируйте блокирующие ресурсы, используйте `async/defer` и lazy load.

---

Источник: [Critical Rendering Path (CRP) — hackfrontend](https://www.hackfrontend.com/docs/general-questions/critical-rendering-path)

[1](https://www.hackfrontend.com/docs/general-questions/critical-rendering-path)
[2](https://developer.mozilla.org/ru/docs/Web/Performance/Guides/Critical_rendering_path)
[3](https://www.hackfrontend.com/docs/general-questions/critical-rendering-path)
[4](https://habr.com/ru/articles/834184/)
[5](https://www.youtube.com/watch?v=Ff_IZrs4GcY)
[6](https://alterfo.github.io/posts/2020/09/25/critical-rendering-path/)
[7](https://habr.com/ru/articles/320430/)
[8](https://pikabu.ru/story/kak_brauzer_renderit_vebstranitsu_9781725)
[9](https://bcorrections.com/blog/speed/critical-render-path)
[10](https://sobes.tech/zh/bank/frontend/78c55f7e-ae89-4658-bef0-cb9567ddc6fc)
[11](https://www.youtube.com/watch?v=bppg4DbaBuk)
