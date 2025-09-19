
---

# Паттерны проектирования MVC (Model-View-Controller) и MVP (Model-View-Presenter)

---

## Что такое MVC (Model-View-Controller)?

**MVC** — популярный архитектурный паттерн, который делит приложение на три слоя:

- **Model** — отвечает за данные и бизнес-логику, получает и обрабатывает данные (API, база данных).
- **View** — отвечает за отображение данных, не содержит бизнес-логики, только UI.
- **Controller** — связывает View и Model, обрабатывает действия пользователя и обновляет модель или представление.

**Поток данных:** Пользователь → View → Controller → Model → Controller → View

Особенности: View может запрашивать данные у модели напрямую, контроллер реагирует на действия пользователя.

---

## Что такое MVP (Model-View-Presenter)?

**MVP** — эволюция MVC, улучшающая тестируемость и изоляцию View:

- **Model** — как и в MVC, управляет данными и бизнес-логикой.
- **View** — отвечает только за отображение, не знает ничего о модели.
- **Presenter** — управляет логикой, получает данные из Model и передает их View.  
  View и Presenter связаны через интерфейсы, что облегчает тестирование Presenter без UI.

**Поток данных:** Пользователь → View → Presenter → Model → Presenter → View

---

## Сравнение MVC vs MVP

| Характеристика        | MVC                     | MVP                          |
| --------------------- | ----------------------- | ---------------------------- |
| Кто управляет логикой | Controller              | Presenter                    |
| View знает о Model?   | Может знать             | Нет                          |
| Model знает о View?   | Нет                     | Нет                          |
| Тестируемость         | Средняя                 | Высокая                      |
| Где используется      | Web-фреймворки, backend | Android, десктоп, сложные UI |

---

## Когда использовать

| Сценарий                                           | Рекомендуемый паттерн                            |
| -------------------------------------------------- | ------------------------------------------------ |
| Простое приложение с минимальной логикой           | MVC                                              |
| Большое приложение с модульностью и тестируемостью | MVP                                              |
| Разработка под Android или со сложным UI           | MVP                                              |
| React / Vue / Angular                              | Чаще используют MVVM или FSD, но принципы похожи |

---

## Полезно знать

В современном фронтенде часто применяют вариации этих паттернов, такие как MVVM, Redux, Flux и Feature-Sliced Design (FSD).

---

Источники:

- [MVC и MVP — hackfrontend](https://www.hackfrontend.com/docs/patterns/mvp-and-mvc)
- [Refactoring.guru — паттерны и рефакторинг](https://refactoring.guru/ru/)
- [Patterns.dev — паттерны](https://www.patterns.dev)

[1](https://www.hackfrontend.com/docs/patterns/mvp-and-mvc)
[2](https://www.reddit.com/r/programming/comments/18ko3er/what_is_the_difference_between_mvc_mvp_mvi_mvvm/)
[3](https://habr.com/ru/articles/215605/)
[4](https://appmaster.io/ru/blog/arkhitekturnye-shablony-mvc-mvp-i-mvvm)
[5](https://highload.tech/blogs/razdelyaj-i-vlastvuj-chto-takoe-patterny-mvc-i-mvp-i-kak-ih-ispolzovat/)
[6](https://www.youtube.com/watch?v=X85soC5evw0)
[7](https://habr.com/ru/articles/344184/)
[8](https://abap4.ru/mvc-like-design-patterns-in-abap.html)
[9](https://www.reddit.com/r/FlutterDev/comments/11mw35i/what_distinguishes_mvc_mvp_mvvm_mvvmc_and_viper/)
