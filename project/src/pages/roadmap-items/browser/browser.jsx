const Browser = () => (
  <div>
    <article>
      <h2>Как работают браузеры</h2>
      <p>
        Браузеры выполняют несколько основных задач для отображения веб-страниц:
      </p>
      <ol>
        <li>Парсинг HTML: Браузеры получают HTML-код с сервера и парсят его для построения DOM (Document Object Model).</li>
        <li>Парсинг CSS: CSS используется для стилизации элементов, которые находятся в DOM. Браузер создает CSSOM (CSS Object Model).</li>
        <li>Парсинг JavaScript: JavaScript код исполняется браузером, чтобы добавлять интерактивность и изменять DOM.</li>
        <li>Рендеринг: После создания DOM и CSSOM, браузер строит рендер-дерево и отрисовывает страницу.</li>
        <li>Обработка запросов: Браузеры отправляют HTTP/HTTPS запросы к серверу для получения данных и ресурсов (картинки, скрипты, стили и т.д.).</li>
      </ol>
    </article>
  </div>
);

export default Browser;
