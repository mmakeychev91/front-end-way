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
      </ul>
    </nav>
    <hr />
  </div>
);

export default Sidebar;
