CORS (Cross-Origin Resource Sharing) — это механизм безопасности браузера, который определяет, может ли веб-страница получать доступ к ресурсам с другого домена, отличного от текущего. По умолчанию политика одного источника (Same-Origin Policy) блокирует такие запросы ради защиты пользователя.[1][3][5]

## Как работает CORS

- Сервер должен явно разрешать доступ с других доменов, отправляя специальные заголовки, например: Access-Control-Allow-Origin.
- Если заголовок не выставлен — браузер блокирует ответ на кросс-доменный запрос.[3][5]
- CORS влияет на fetch/AJAX-запросы, но не блокирует загрузку картинок, стилей или скриптов через теги img, script, link.[4][7]

## Как обойти CORS

Обходить CORS корректно стоит только в легальных и безопасных целях (например, при разработке):

- Настроить CORS на сервере: добавить нужные заголовки (обычно Access-Control-Allow-Origin: \*).
- Использовать прокси-сервер (backend или специальные сервисы), который будет делать запросы вместо клиента и отдавать уже разрешённые данные.
- Для локальной разработки — использовать расширения браузера или запускать сервер с отключённой проверкой CORS (только для теста!).[7][8]

Используйте обход CORS только при полном понимании рисков и исключительно для разрешённых задач, так как отключение защиты может привести к уязвимостям и атакам.[8][4][7]

[1](https://developer.mozilla.org/ru/docs/Web/HTTP/Guides/CORS)
[2](https://ru.wikipedia.org/wiki/Cross-origin_resource_sharing)
[3](https://doka.guide/tools/cors/)
[4](https://yandex.cloud/ru/docs/glossary/cors)
[5](https://developer.mozilla.org/ru/docs/Glossary/CORS)
[6](https://fastapi.tiangolo.com/ru/tutorial/cors/)
[7](https://habr.com/ru/companies/owasp/articles/337146/)
[8](https://habr.com/ru/companies/macloud/articles/553826/)
[9](https://aws.amazon.com/ru/what-is/cross-origin-resource-sharing/)
[10](https://www.reddit.com/r/node/comments/10pnzfg/what_actually_cors_is_cross_origin_resource/?tl=ru)
