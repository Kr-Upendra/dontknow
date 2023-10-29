import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [shownav, setShownav] = useState(false);

  const handleNavbar = () => {
    setShownav((prevValue) => !prevValue);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to=".">
          <img
            src="./img/logo.png"
            className="navbar__logo--img"
            alt="Logo | Cricket Fever"
          />
        </Link>
      </div>
      <div
        onClick={handleNavbar}
        aria-hidden={!shownav}
        className="navbar__menuicon"
      >
        <div className="navbar__menuicon--bar"></div>
        <div className="navbar__menuicon--bar"></div>
        <div className="navbar__menuicon--bar"></div>
      </div>
      <div aria-hidden={shownav} className="navbar__menus">
        <NavLink
          to={"."}
          className={({ isActive }) =>
            isActive ? "navbar__menus--item nav__active" : "navbar__menus--item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/live"}
          className={({ isActive }) =>
            isActive ? "navbar__menus--item nav__active" : "navbar__menus--item"
          }
        >
          Live
        </NavLink>
        <NavLink
          to={"/world-cup"}
          className={({ isActive }) =>
            isActive ? "navbar__menus--item nav__active" : "navbar__menus--item"
          }
        >
          World Cup
        </NavLink>
        <NavLink
          to={"/series"}
          className={({ isActive }) =>
            isActive ? "navbar__menus--item nav__active" : "navbar__menus--item"
          }
        >
          Series
        </NavLink>
        <NavLink
          to={"/more"}
          className={({ isActive }) =>
            isActive ? "navbar__menus--item nav__active" : "navbar__menus--item"
          }
        >
          More
        </NavLink>
      </div>
    </nav>
  );
}
