
---

# Паттерн Декоратор (Decorator)

---

**Декоратор** — структурный паттерн, позволяющий динамически добавлять объекту новые обязанности, оборачивая его в объекты-декораторы, не изменяя исходный класс.

---

## Зачем нужен Декоратор?

- Позволяет расширять функциональность объектов без использования наследования.
- Удобно, когда нужно добавить поведение «на лету».
- Полезен при множестве пересекающихся функций, которые можно комбинировать.

---

## Когда применять Декоратор?

1. Для динамического расширения объекта без создания множества подклассов.
2. Когда нельзя или не хочется модифицировать класс напрямую (например, сторонние библиотеки).
3. При необходимости сочетать разные виды функционала без взрывного увеличения классов.

---

## Принцип работы

- Определяется базовый интерфейс (или абстрактный класс) с основным поведением.
- Конкретный класс реализует этот интерфейс.
- Декоратор реализует тот же интерфейс, содержит ссылку на объект того же типа и делегирует ему работу, дополняя её «до» или «после» основной логики.
- Декораторы можно вкладывать друг в друга, создавая цепочку с разными функциями.

---

## Пример (TypeScript)

```ts
// 1. Базовый интерфейс для компонентов
interface DataSource {
  writeData(data: string): void;
  readData(): string;
}

// 2. Конкретный класс, реализующий интерфейс
class FileDataSource implements DataSource {
  private filename: string;
  private buffer: string = '';

  constructor(filename: string) {
    this.filename = filename;
  }

  writeData(data: string): void {
    this.buffer = data;
    console.log(`Data "${data}" written to file: ${this.filename}`);
  }

  readData(): string {
    console.log(`Reading data from file: ${this.filename}`);
    return this.buffer;
  }
}

// 3. Общий класс-декоратор
class DataSourceDecorator implements DataSource {
  protected wrappee: DataSource;

  constructor(source: DataSource) {
    this.wrappee = source;
  }

  writeData(data: string): void {
    this.wrappee.writeData(data);
  }

  readData(): string {
    return this.wrappee.readData();
  }
}

// 4. Конкретные декораторы
class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const encrypted = btoa(data); // Base64 шифрация
    console.log('Encrypting data...');
    super.writeData(encrypted);
  }

  readData(): string {
    const data = super.readData();
    console.log('Decrypting data...');
    return atob(data);
  }
}

class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    console.log('Compressing data...');
    const compressed = `COMPRESSED(${data})`;
    super.writeData(compressed);
  }

  readData(): string {
    const data = super.readData();
    console.log('Decompressing data...');
    return data.replace(/^COMPRESSED\(|\)$/g, '');
  }
}

// 5. Клиентский код
function clientCode() {
  const file = new FileDataSource('data.txt');

  // Оборачиваем файл декораторами
  const encryption = new EncryptionDecorator(file);
  const compression = new CompressionDecorator(encryption);

  // Запись данных
  compression.writeData('Hello, Decorator!');

  // Чтение данных
  console.log('Final data:', compression.readData());
}

clientCode();
```

---

## Преимущества

- Гибкость: добавление функциональностей на лету, разнообразные комбинации декораторов.
- Соблюдение принципа единственной ответственности: каждое новое поведение в отдельном классе.
- Повторное использование: декоратор можно применять к разным объектам без изменения их исходного кода.

---

## Недостатки

- Усложнение структуры: при многих декораторах цепочка может стать сложной для понимания.
- Сложность отладки: порядок оборачивания влияет на поведение, за этим надо внимательно следить.

---

## Важно

Избегайте излишнего количества декораторов, чтобы не усложнять логику. Оценивайте реальную необходимость паттерна.

---

Подробнее про Декоратор: [refactoring.guru — Decorator](https://refactoring.guru/ru/design-patterns/decorator)  
Основные ресурсы: [refactoring.guru](https://refactoring.guru/ru/), [patterns.dev](https://www.patterns.dev)

---

Источник: [Паттерн Декоратор — hackfrontend](https://www.hackfrontend.com/docs/patterns/decorator)
