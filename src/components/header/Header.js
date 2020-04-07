import React from "react";
import * as styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

// 1315

// <a href="/" className={`${styles.header__big_title} ${styles.header__big_title__red}`}><span>Adam Turner</span></a>
// <a href="/" className={[styles.header__big_title, styles.header__big_title__red].join(' ')}><span>Adam Turner</span></a>

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.header__title}>
        <span>Adam Turner</span>
      </NavLink>
      <nav>
        <ul className={styles.nav_links}>
          <li>
            <NavLink
              activeClassName={styles.active}
              className={styles.link}
              to="/"
              exact
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
