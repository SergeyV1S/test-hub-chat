# BotHubChat

**[Перейти на веб-приложение](https://bot-hub-ai.igniz.ru/)**

Этот проект является реализацией тестового задания на **React**.

---

## 🚀 **Основные технологии**

- **React**: Библиотека для создания пользовательских интерфейсов.
- **Redux TookKit**: Библиотека управления состоянием в React.
- **React Router Dom**: Библиотека для роутинга в SPA приложениях.
- **Styled Components**: библиотека для стилизации приложений React методом CSS in JS.
- **Vite**: Инструмент для сборки и разработки, обеспечивающий быструю компиляцию и запуск приложения.
- **Vite Plugin PWA**: Инструмент для интеграции PWA в Vite приложение.
- **TypeScript**: Язык программирования, расширяющий JavaScript статической типизацией.
- **ESLint**: Инструмент для анализа кода с целью выявления проблем в JavaScript/TypeScript коде.
- **Prettier**: Инструмент для автоматического форматирования кода.

---

## ⚙️ **Переменные окружения**

Перед запуском убедитесь, что у вас настроены следующие переменные окружения (см. `.env.example`):

- `BASE_API_URL`: URL API.
- `AUTHORIZATION_TOKEN`: AUTHORIZATION TOKEN.

---

## 🐳 **Запуск через Docker**

### 📦 **1. Использование стандартного Dockerfile**

**Сборка образа:**

```bash
docker build \
  --build-arg BASE_API_URL=your_base_api_url \
  --build-arg AUTHORIZATION_TOKEN=your_authorization_token \
  -t react-starter .
```

**Запуск контейнера:**

```bash
docker run \
  -e BASE_API_URL=your_base_api_url \
  -e AUTHORIZATION_TOKEN=your_authorization_token \
  -d -p 5173:5173 react-starter
```

### 📦 **2. Использование Dockerfile.ng**

**Сборка образа:**

```bash
docker build \
  --build-arg BASE_API_URL=your_base_api_url \
  --build-arg AUTHORIZATION_TOKEN=your_authorization_token \
  -t react-starter -f Dockerfile.ng .
```

**Запуск контейнера:**

```bash
docker run \
  -e BASE_API_URL=your_base_api_url \
  -e AUTHORIZATION_TOKEN=your_authorization_token \
  -d -p 5173:80 react-starter
```

После запуска контейнера приложение будет доступно по адресу **[http://localhost:5173](http://localhost:5173)**.

> **Важно:** Убедитесь, что вы заменили переменные окружения на актуальные значения для вашего окружения.

---

## 🛠️ **Дополнительная информация**

- Убедитесь, что Docker установлены на вашем устройстве.
- В случае проблем проверьте логи контейнера:

```bash
docker logs <container_id>
```
