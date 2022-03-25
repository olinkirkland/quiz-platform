import { Outlet, NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <nav>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </nav>
      <Outlet />
      <footer></footer>
    </div>
  );
};
