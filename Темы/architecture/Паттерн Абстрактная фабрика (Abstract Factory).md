
---

# Паттерн Абстрактная фабрика (Abstract Factory)

---

**Абстрактная фабрика** — порождающий паттерн, предоставляющий интерфейс для создания семейств взаимосвязанных объектов без указания конкретных классов. Это полезно, когда нужно работать с разными «семействами» объектов, но при этом делать код независимым от конкретных реализаций.

---

## Когда применять Abstract Factory?

- Если в программе несколько семейств продуктов, которые должны использоваться совместно (например, темы: светлая/тёмная, платформы: Web/Mobile).
- Когда создание объектов зависит от конфигурации или среды, но детали реализации должны быть скрыты.
- Если нужно скрыть логику выбора реализации за интерфейсом, чтобы легко менять её без изменения клиентского кода.

---

## Принцип работы

1. **Определение семейств продуктов**  
   Например, Button, Checkbox, Modal для разных платформ или тем.

2. **Создание абстрактных интерфейсов**  
   Для каждого типа продукта описывается абстракция с необходимыми методами (например, `render()`, `toggle()`).

3. **Реализация конкретных продуктов**  
   Создаются классы для каждой платформы или темы (MacButton, WinButton, MacCheckbox, WinCheckbox).

4. **Абстрактная фабрика**  
   Интерфейс с методами создания продуктов (`createButton()`, `createCheckbox()`), конкретные фабрики реализуют эти методы (MacFactory, WinFactory).

5. **Клиентский код**  
   Работает с абстрактными фабриками и продуктами, выбирая нужную фабрику во время запуска без изменения логики.

---

## Пример на TypeScript

```ts
// 1. Абстрактные интерфейсы продуктов
interface Button {
  render(): void;
}

interface Checkbox {
  toggle(): void;
}

// 2. Конкретные продукты
class MacButton implements Button {
  render(): void {
    console.log('Mac button rendered');
  }
}

class WinButton implements Button {
  render(): void {
    console.log('Windows button rendered');
  }
}

class MacCheckbox implements Checkbox {
  toggle(): void {
    console.log('Mac checkbox toggled');
  }
}

class WinCheckbox implements Checkbox {
  toggle(): void {
    console.log('Windows checkbox toggled');
  }
}

// 3. Абстрактная фабрика
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// 4. Конкретные фабрики
class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

// 5. Клиентский код
function runApp(factory: GUIFactory) {
  const button = factory.createButton();
  button.render();

  const checkbox = factory.createCheckbox();
  checkbox.toggle();
}

// Использование
runApp(new MacFactory()); // Mac UI
runApp(new WinFactory()); // Windows UI
```

---

## Итог

Абстрактная фабрика отлично подходит для крупных систем с разными семействами продуктов. Она повышает гибкость кода, позволяя переключаться между наборами объектов без изменения бизнес-логики.

Однако из-за увеличения количества классов паттерн может быть избыточен для небольших задач.

---

Подробнее: [refactoring.guru — Abstract Factory](https://refactoring.guru/ru/design-patterns/abstract-factory)

---

Источник: [Абстрактная фабрика — hackfrontend](https://www.hackfrontend.com/docs/patterns/abstract-factory)
