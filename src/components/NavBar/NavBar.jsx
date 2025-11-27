import { NavLink } from "react-router";
const NavBar = () => {
  return (
    <div>
      <ul
        className="flex flex-row m-5 gap-4 ${(element) => {
          element.isActive "
      >
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-950 text-white px-2 py-1 rounded" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-950 text-white px-2 py-1 rounded" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-950 text-white px-2 py-1 rounded" : ""
            }
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
