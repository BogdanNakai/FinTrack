# 💰 FinTrack

FinTrack — навчальний React-застосунок для обліку особистих фінансів. Проєкт перебуває в активній розробці: інтерфейс основних сторінок готовий, а CRUD транзакцій, бюджетів і фінансових цілей ще підключається до Redux.

## Поточні можливості

- реєстрація та вхід із локальним збереженням користувачів;
- захищені маршрути;
- вихід із поточного облікового запису;
- адаптивні сторінки Dashboard, Transactions, Budget, Goals, Reports і Profile;
- демонстраційні таблиці та фінансові графіки;
- підготовлений Redux store для транзакцій;
- збереження даних у `localStorage`.

> Авторизація через `localStorage` призначена лише для навчальної демонстрації. Вона не є заміною серверної авторизації.

## У розробці

- додавання, редагування та видалення транзакцій;
- підключення таблиць і графіків до Redux;
- функціональні фільтри та сортування;
- керування бюджетами та фінансовими цілями;
- експорт і очищення даних профілю.

## Технології

- React 19;
- TypeScript;
- Vite;
- React Router;
- Redux Toolkit і React Redux;
- React Hook Form;
- Material UI;
- MUI X Charts;
- Chart.js і React Chart.js 2;
- Tailwind CSS;
- SCSS;
- Day.js;
- LocalStorage.

## Структура

```text
src/
├── app/          # Redux store і типізовані hooks
├── assets/       # SVG-ресурси
├── components/   # Повторно використовувані UI-компоненти
├── context/      # Тимчасові константи та демонстраційні дані
├── features/     # Функціональні модулі застосунку
├── layouts/      # Header, menu, loading і footer
├── pages/        # Сторінки маршрутів
├── routes/       # Конфігурація маршрутів і route guards
├── services/     # Робота з localStorage
└── types/        # Спільні TypeScript-типи
```

## Запуск

Потрібен Node.js і npm.

```bash
npm install
npm run dev
```

## Команди

```bash
npm run dev      # Локальний сервер розробки
npm run lint     # Статичний аналіз ESLint
npm run build    # TypeScript-перевірка і production-збірка
npm run preview  # Перегляд production-збірки
```

## Автор

Bogdan Nakai
