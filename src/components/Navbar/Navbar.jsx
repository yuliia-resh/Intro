import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink
        exact to="/"
        activeClassName={styles.active}
        className={styles.navItem}
      >
        Home
      </NavLink>
      <NavLink
        to="/facts"
        activeClassName={styles.active}
        className={styles.navItem}
      >
        Facts
      </NavLink>
      <NavLink
        to="/contacts"
        activeClassName={styles.active}
        className={styles.navItem}
      >
        Contacts
      </NavLink>
    </div>
  );
}

export default Navbar;
