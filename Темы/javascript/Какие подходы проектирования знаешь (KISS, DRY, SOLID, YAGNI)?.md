Основные подходы проектирования, которые часто используются в разработке для повышения качества и удобства сопровождения кода — это KISS, DRY, SOLID, YAGNI. Вот краткое описание и примеры каждого из них:

---

### KISS — Keep It Simple, Stupid (Делай проще)

**Суть:** Стремиться к простому и понятному решению, избегать излишней сложности.

**Пример:**

```js
// Плохой код — много условий и усложнённая логика
function getDiscount(user) {
  if (user.isVip) {
    if (user.orders > 10) {
      return 0.2;
    } else {
      return 0.1;
    }
  }
  return 0;
}

// Хороший код — простая и очевидная логика
function getDiscount(user) {
  if (!user.isVip) return 0;
  return user.orders > 10 ? 0.2 : 0.1;
}
```

---

### DRY — Don't Repeat Yourself (Не повторяйся)

**Суть:** Избегать дублирования кода, выносить общие части в отдельные функции, модули, компоненты.

**Пример:**

```js
// Дублирование кода
function processUser(user) {
  console.log('Start processing');
  console.log(`User: ${user.name}`);
  // ...другая логика
}

function processAdmin(admin) {
  console.log('Start processing');
  console.log(`Admin: ${admin.name}`);
  // ...другая логика
}

// Правильный вариант
function logUser(entity) {
  console.log('Start processing');
  console.log(`Entity: ${entity.name}`);
}

function processUser(user) {
  logUser(user);
  // ...логика
}

function processAdmin(admin) {
  logUser(admin);
  // ...логика
}
```

---

### SOLID — пять принципов объектно-ориентированного программирования

- **S (Single Responsibility)** — один класс или модуль должен иметь только одну причину для изменения.
- **O (Open/Closed)** — программные сущности должны быть открыты для расширения, но закрыты для модификации.
- **L (Liskov Substitution)** — объекты подкласса должны заменять объекты базового класса без изменений поведения.
- **I (Interface Segregation)** — лучше много специализированных интерфейсов, чем один универсальный.
- **D (Dependency Inversion)** — модули верхнего уровня не должны зависеть от модулей нижнего уровня; оба должны зависеть от абстракций.

---

### YAGNI — You Aren't Gonna Need It (Вам это не понадобится)

**Суть:** Не добавлять функционал заранее, реализовывать только то, что действительно нужно сейчас.

**Пример:**

```js
// Плохой подход: писать сложный механизм авторизации, который не используется
// Хороший подход: сделать базовую авторизацию, расширять при необходимости
```

---

### Итог

- **KISS** призывает к простоте и понятности.
- **DRY** устраняет дублирование.
- **SOLID** улучшает качество архитектуры, делая её устойчивой и расширяемой.
- **YAGNI** избегает ненужной избыточности и экономит время.

Следование этим принципам помогает создавать поддерживаемый, понятный и эффективный код.[1][2][5][6]

[1](https://habr.com/ru/companies/itelma/articles/546372/)
[2](https://habr.com/ru/articles/925208/)
[3](https://tproger.ru/articles/5-principov-chitaemogo-koda-kiss-yagni-dry-bduf-i-britva-okkama)
[4](https://synergy.ru/akademiya/programming/kiss_yagni_dry_i_drugie_princzipov_kotoryie_dolzhen_znat_kazhdyij_razrabotchik)
[5](https://justice-it.ru/blog/tech/solid-yagni-dry-kiss-principles-in-react/)
[6](https://proweb63.ru/help/devtools/priciple-oop)
[7](https://www.youtube.com/watch?v=qNhq71TvVI8)
[8](https://phpqa.ru/post/solid-kiss-dry-yagni-ddd)
[9](https://skillbox.ru/media/code/eto-klassika-eto-znat-nado-dry-kiss-solid-yagni-i-drugie-poleznye-sokrashcheniya/)
