import { NavLink, Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <Link to=".">
          <img
            src="/img/logo_long.png"
            alt="Cricket Fever Logo"
            className="sidebar__logo--img"
          />
        </Link>
      </div>
      <div className="sidebar__menus">
        <NavLink
          to="."
          className={({ isActive }) =>
            isActive
              ? "sidebar__menus--item nav__active"
              : "sidebar__menus--item"
          }
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "sidebar__menus--item nav__active"
              : "sidebar__menus--item"
          }
          to="/stats"
        >
          Stats
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "sidebar__menus--item nav__active"
              : "sidebar__menus--item"
          }
          to="/videos"
        >
          Videos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "sidebar__menus--item nav__active"
              : "sidebar__menus--item"
          }
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div className="sidebar__downmenu">
        <Link className="el-sidebtn sidebar__downmenu--item" to="/account">
          Sign in
        </Link>
        <button type="button" className="el-sidebtn sidebar__downmenu--btn">
          Sign out
        </button>
      </div>
    </nav>
  );
}
