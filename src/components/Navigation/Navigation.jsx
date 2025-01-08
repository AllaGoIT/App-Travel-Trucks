import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <>
      <nav className={css.nav}>
        <NavLink className={css.link} to="./">
          Home
        </NavLink>
        <NavLink className={css.linkCont} to="./catalog">
          Cotalog
        </NavLink>
        <NavLink className={css.link} to="/catalog/:id">
          Reviews
        </NavLink>
        <NavLink className={css.link} to="/catalog/:id">
          Features
        </NavLink>
      </nav>
    </>
  );
}

export default Navigation;
