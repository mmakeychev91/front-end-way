import { NavLink } from 'react-router-dom';

const Roadmap = () => (
  <div>
    <p>Дата составления: май 2024 г. (необходимо обновить в мае 2025 г.)</p>
    <ol>
      <li>
        Интернет
        <ul>
          <NavLink end to="/roadmap/browser"><li>Как работают браузеры ✓</li></NavLink>
          <NavLink end to="/roadmap/http"><li>Что такое HTTP/S протокол ✓</li></NavLink>
          <NavLink end to="/roadmap/domain-name"><li>Что такое Доменное имя ✓</li></NavLink>
        </ul>
      </li>
      <li>
        Git ✓
        <ul>
          <li>Необходимость гита ✓</li>
          <li>Настройка аккаунта гитхаб или гитлаб ✓</li>
          <li>Команды гита ✓</li>
        </ul>
      </li>
      <li>
        HTML 5 ✓
        <ul>
          <li>Теги, семантические теги ✓</li>
          <li>Разница между старым и новым HTML ✓</li>
        </ul>
      </li>
      <li>
        CSS
        <ul>
          <li>Grid, Flexbox ✓</li>
          <li>Адаптивный дизайн ✓</li>
          <li>Препроцессоры: SCSS/Less (иметь опыт с двумя) ✓</li>
          <NavLink end to="/roadmap/ui-libs">
            <li>
              Библиотеки: tailwind/material ui ✓ /ant design ✓ (иметь опыт хотя бы с
              двумя) ✓
            </li>
          </NavLink>
        </ul>
      </li>
      <li>
        JavaScript
        <ul>
          <NavLink end to="/roadmap/variables">
            <li>
              Типы данных, переменные, функции, циклы, проверки, логические
              операторы
            </li>
          </NavLink>
          <li>Хостинг</li>
          <li>Функции (в том числе стрелочные)</li>
          <li>
            Работа с объектами (методы, копирование, this, функции-конструкторы,
            геттеры-сеттеры, дескрипторы свойств)
          </li>
          <li>Массивы</li>
          <li>Замыкания, Область видимости</li>
          <li>Прототипы, прототипное наследование</li>
          <li>Асинхронность ✓</li>
          <li>
            ES6 (деструктуризация, коллекции (Map, Set), промисы, async/await)
          </li>
          <NavLink end to="/roadmap/event-loop">
            <li>Event Loop (setTimeout, micro/macro tasks) ✓</li>
          </NavLink>
          <li>Запросы (fetch,axios)</li>
          <li>Рекурсия</li>
          <li>
            Манипуляция с DOM, всплытие, погружение, блокирование дефолтного
            поведения браузера, делегирование событий
          </li>
          <li>Работа с формами</li>
          <li>Async/Defet</li>
          <li>Регулярные выражения</li>
          <li>DRY, KISS, SOLID и т.д</li>
        </ul>
      </li>
      <li>
        Фреймворк
        <ul>
          <li>
            <span>React</span>
            <ul>
              <li>Зачем нужен и что это такое ✓</li>
              <li>Vite/CRA</li>
              <li>JSx ✓</li>
              <li>Компоненты</li>
              <li>Построение дерева компонентов</li>
              <li>Props vs State (что это такое и чем они отличаются)</li>
              <li>Conditional rendering</li>
              <li>Списки и ключи</li>
              <li>Events</li>
              <li>Стили, в том числе и библиотеки типа Styled-components ✓</li>
              <li>Жизненый цикл компонента</li>
              <li>Hooks</li>
              <li>Custom Hooks</li>
              <li>Роутинг (React-Router-Dom)</li>
              <li>State Management (Recoil/TanStack Query)</li>
              <li>Запросы (fetch, axios)</li>
              <li>Тестирование (Jest, React-testing-library)</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>TypeScript</li>
      <li>Node.js (базово)</li>
      <li>SSR (Next.js)</li>
      <li>Анимация (gsap)</li>
    </ol>
  </div >
);

export default Roadmap;
