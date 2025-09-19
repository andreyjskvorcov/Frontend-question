
---

# Что такое трёхстороннее рукопожатие (Three-way Handshake)?

**Трёхстороннее рукопожатие** — процесс установления соединения между клиентом и сервером по протоколу TCP (Transmission Control Protocol).

Этот механизм обеспечивает надёжное и упорядоченное соединение между двумя сторонами до начала обмена данными.

---

## Как работает трёхстороннее рукопожатие?

Установление TCP-соединения происходит в три шага:

1. **SYN (с клиента)**  
   Клиент отправляет SYN-пакет (Synchronize) серверу с начальным номером последовательности.

2. **SYN-ACK (с сервера)**  
   Сервер получает SYN, подтверждает его с помощью ACK (Acknowledgment), и одновременно отправляет свой SYN — говоря: «Я получил твой запрос и хочу установить соединение».

3. **ACK (с клиента)**  
   Клиент получает SYN-ACK и отправляет подтверждение ACK-пакет. После этого соединение считается установленным, и начинается обмен данными.

---

## Схема трёхстороннего рукопожатия

```plaintext
Клиент → Сервер: SYN (номер: x)
Сервер → Клиент: SYN-ACK (номер: y, подтверждение: x+1)
Клиент → Сервер: ACK (подтверждение: y+1)
```

---

## Зачем нужно трёхстороннее рукопожатие?

- Устанавливает **надёжное соединение** между клиентом и сервером.
- Согласовывает начальные номера последовательности, чтобы избежать потери данных.
- Проверяет, что обе стороны готовы к передаче данных.

---

## Применение

- При открытии веб-страницы браузер устанавливает TCP-соединение с сервером с помощью этого процесса.
- Используется в протоколах HTTPS, FTP, SMTP и других, работающих поверх TCP.

---

## Важно

Трёхстороннее рукопожатие относится только к TCP. Протокол UDP не требует установки соединения.

---

## Вывод

| Этап    | Что делает                                  |
| ------- | ------------------------------------------- |
| SYN     | Клиент инициирует соединение                |
| SYN-ACK | Сервер подтверждает и предлагает соединение |
| ACK     | Клиент подтверждает соединение              |

После этого соединение считается установленным и можно начинать обмен данными.

---

Источник: [Трёхстороннее рукопожатие — hackfrontend](https://www.hackfrontend.com/docs/general-questions/three-way-handshake)

[1](https://stormwall.pro/resources/terms/general/tcp-handshake)
[2](https://sky.pro/wiki/javascript/tcp-handshake-kak-rabotaet-trehstoronnee-rukopozhatie/)
[3](https://ddos-guard.ru/terms/protocols/tcp-handshake)
[4](https://habr.com/ru/articles/732794/)
[5](https://www.hackfrontend.com/docs/general-questions/three-way-handshake)
[6](https://sky.pro/wiki/sql/ustanovka-soedineniya-v-tcp-trehstoronnee-rukopozhatie/)
[7](https://www.securityvision.ru/education/cyberwiki/t/tcp-handshake-tryekhstoronnee-rukopozhatie/)
[8](https://learn.microsoft.com/ru-ru/troubleshoot/windows-server/networking/three-way-handshake-via-tcpip)
[9](https://wtrtwr.by/ru/posts/tcp-handshakes/)
[10](http://ru.mylinking.com/news/key-mysteries-of-network-packet-broker-tcp-connections-demystified-the-need-for-triple-handshake/)
