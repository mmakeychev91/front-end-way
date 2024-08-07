const EventLoop = () => (
  <div>
    <article>
      <h2>Event loop</h2>
      <p>
        <a href="https://www.youtube.com/watch?v=377qAu37OTE">
          Простыми словами про event loop
        </a>
      </p>
    </article>
    <article>
      <h2>Микро и макро задачи</h2>
      <p>
        В программировании, особенно в контексте JavaScript, микрозадачи
        (microtasks) и макрозадачи (macrotasks) относятся к концепции управления
        асинхронным кодом и событиями в цикле событий (event loop). Это важно
        для понимания того, как выполняются различные асинхронные операции,
        такие как setTimeout, Promise, async/await и другие. <br />В JavaScript
        сначала выполняются микрозадачи, а затем макрозадачи. Давайте уточним
        последовательность выполнения шагов в цикле событий
        <br />
        Макрозадачи (macrotasks) Макрозадачи представляют собой крупные единицы
        работы, которые выполняются в цикле событий. К макрозадачам относятся:
        Таймеры (setTimeout, setInterval) Обработчики событий DOM Сетевые
        запросы (например, XMLHttpRequest, fetch) Когда вы вызываете одну из
        этих функций, они ставятся в очередь макрозадач. Цикл событий будет
        обрабатывать каждую макрозадачу по очереди. <br />
        Микрозадачи (microtasks) Микрозадачи представляют собой более мелкие
        единицы работы, которые должны быть выполнены сразу после текущего
        выполнения скрипта и перед следующей макрозадачей. К микрозадачам
        относятся: Обработчики промисов (Promise.then, Promise.catch,
        Promise.finally) Метод process.nextTick в Node.js Объекты
        MutationObserver Когда вы создаете микрозадачу, она помещается в очередь
        микрозадач, которая будет обработана после текущей макрозадачи и перед
        переходом к следующей макрозадаче. <br />
        Цикл событий (Event Loop) Цикл событий в JavaScript работает следующим
        образом: Извлечь и выполнить макрозадачу из очереди макрозадач.
        Выполнить все микрозадачи из очереди микрозадач. Переходить к следующей
        макрозадаче и повторить шаги 1 и 2.
      </p>
    </article>
  </div>
);

export default EventLoop;
