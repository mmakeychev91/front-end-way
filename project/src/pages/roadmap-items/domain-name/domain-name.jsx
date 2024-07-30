const DomainName = () => (
  <div>
    <article>
      <h2>Что такое Доменное имя</h2>
      <p>Доменное имя — это читаемая человеком строка, которая используется для идентификации IP-адреса сервера в интернете. Оно состоит из нескольких частей, разделенных точками (например, example.com).</p>
      <ul>
        <li>Top-Level Domain (TLD): Это последняя часть домена, например, .com, .org, .net.</li>
        <li>Second-Level Domain (SLD): Это часть домена, которая идет перед TLD, например, example в example.com.</li>
        <li>Subdomain: Это часть домена, которая идет перед SLD, например, www в www.example.com.</li>
      </ul>
      <p>Доменные имена упрощают навигацию в интернете, так как запомнить адрес example.com проще, чем IP-адрес 93.184.216.34.</p>
      <p>Система доменных имен (DNS) отвечает за перевод доменных имен в IP-адреса и обратно, обеспечивая доступ к ресурсам по читаемым именам.</p>
    </article>
  </div>
);

export default DomainName;