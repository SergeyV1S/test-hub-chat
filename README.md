# React Starter

Этот проект является стартовым шаблоном для разработки приложений на **React**, предоставляя готовую структуру и конфигурацию для быстрого начала работы.

## 🚀 **Основные технологии**

- **React**: Библиотека для создания пользовательских интерфейсов.
- **Vite**: Инструмент для сборки и разработки, обеспечивающий быструю компиляцию и запуск приложения.
- **TypeScript**: Язык программирования, расширяющий JavaScript статической типизацией.
- **Jest**: Фреймворк для тестирования JavaScript-кода.
- **React Testing Library**: Набор утилит для тестирования компонентов React.
- **ESLint**: Инструмент для анализа кода с целью выявления проблем в JavaScript/TypeScript коде.
- **Prettier**: Инструмент для автоматического форматирования кода.

---

## ⚙️ **Переменные окружения**

Перед запуском убедитесь, что у вас настроены следующие переменные окружения (см. `.env.example`):

- `BASE_API_URL`: URL базового API.
- `BASE_YANDEX_API_URL`: URL базового API Яндекса.
- `YANDEX_REDIRECT_URI`: URI перенаправления для Яндекса.
- `YANDEX_CLIENT_ID`: Идентификатор клиента Яндекса.
- `YANDEX_CLIENT_SECRET`: Секрет клиента Яндекса.

---

## 🐳 **Запуск через Docker**

### 📦 **1. Использование стандартного Dockerfile**

**Сборка образа:**

```bash
docker build \
  --build-arg BASE_API_URL=http://localhost:8000/api \
  --build-arg BASE_YANDEX_API_URL=your_yandex_api_url \
  --build-arg YANDEX_REDIRECT_URI=your_redirect_uri \
  --build-arg YANDEX_CLIENT_ID=your_client_id \
  --build-arg YANDEX_CLIENT_SECRET=your_client_secret \
  -t react-starter .
```

**Запуск контейнера:**

```bash
docker run \
  -e BASE_API_URL=http://localhost:8000/api \
  -e BASE_YANDEX_API_URL=your_yandex_api_url \
  -e YANDEX_REDIRECT_URI=your_redirect_uri \
  -e YANDEX_CLIENT_ID=your_client_id \
  -e YANDEX_CLIENT_SECRET=your_client_secret \
  -d -p 5173:5173 react-starter
```

### 📦 **2. Использование Dockerfile.ng**

**Сборка образа:**

```bash
docker build \
  --build-arg BASE_API_URL=http://localhost:8000/api \
  --build-arg BASE_YANDEX_API_URL=your_yandex_api_url \
  --build-arg YANDEX_REDIRECT_URI=your_redirect_uri \
  --build-arg YANDEX_CLIENT_ID=your_client_id \
  --build-arg YANDEX_CLIENT_SECRET=your_client_secret \
  -t react-starter -f Dockerfile.ng .
```

**Запуск контейнера:**

```bash
docker run \
  -e BASE_API_URL=http://localhost:8000/api \
  -e BASE_YANDEX_API_URL=your_yandex_api_url \
  -e YANDEX_REDIRECT_URI=your_redirect_uri \
  -e YANDEX_CLIENT_ID=your_client_id \
  -e YANDEX_CLIENT_SECRET=your_client_secret \
  -d -p 5173:80 react-starter
```

После запуска контейнера приложение будет доступно по адресу **[http://localhost:5173](http://localhost:5173)**.

> **Важно:** Убедитесь, что вы заменили переменные окружения на актуальные значения для вашего окружения.

---

## 🛠️ **Дополнительная информация**

- Убедитесь, что Docker и Docker Compose установлены на вашем устройстве.
- В случае проблем проверьте логи контейнера:

```bash
docker logs <container_id>
```
