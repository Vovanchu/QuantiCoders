import { useState } from "react";
import styles from "./NavBar.module.scss";
import Logo from "../../assets/heart_594740.png";
import { NavLink } from "react-router-dom";
import navBarLink from "../../const/NavBarConst";
import type { NavBarList } from "../../types/navBarLinks";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navList: NavBarList = navBarLink;

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.nav_logo}>
        <img src={Logo} alt="logo" className={styles.nav_logo_img} />
      </NavLink>

      {/* Бургер */}
      <div
        className={`${styles.burger} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`${styles.nav_section} ${
          isOpen ? styles.nav_section_open : ""
        }`}
      >
        <ul className={styles.nav_list}>
          {navList.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_item} ${styles["nav_item_active"]}`
                  : styles.nav_item
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        <div className={styles.nav_auth_actions}>
          <NavLink
            to="/auth"
            className={`${styles.nav_auth_actions_link} ${styles.login}`}
            onClick={() => setIsOpen(false)}
          >
            Вхід
          </NavLink>
          <span>/</span>
          <NavLink
            to="/auth"
            className={`${styles.nav_auth_actions_link} ${styles.signup}`}
            onClick={() => setIsOpen(false)}
          >
            Реєстрація
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
