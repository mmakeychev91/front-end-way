import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLink end to="/roadmap">
            Roadmap
          </NavLink>
        </li>
        <li>
          <NavLink end to="/books">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink end to="/projects">
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink end to="/learning-diary">
            Дневник обучения
          </NavLink>
        </li>
      </ul>
    </nav>
    <hr />
  </div>
);

export default Sidebar;
