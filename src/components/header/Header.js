import React from "react";
import * as styles from "./Header.module.scss";

// 2. Your Name top left - link
// 3. 3 links - top right : about, skills and contact

// <a href="/" className={`${styles.header__big_title} ${styles.header__big_title__red}`}><span>Adam Turner</span></a>
// <a href="/" className={[styles.header__big_title, styles.header__big_title__red].join(' ')}><span>Adam Turner</span></a>

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.header__title}>
        <span>Adam Turner</span>
      </a>
      <nav>
        <ul className={styles.nav_links}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
