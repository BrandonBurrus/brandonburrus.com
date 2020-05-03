import React from 'react';
import { Link } from 'gatsby';
import { ROUTES } from '../../constants';
import styles from './Navbar.module.css';

/**
 * Main navigation bar
 */
function Navbar() {
  return (
    <section className={styles.navbar}>
      <header className={styles.header}>
        <h1>
          <Link to={ROUTES.HOME} className={styles.headerText}>
            Brandon&nbsp;Burrus
          </Link>
        </h1>
      </header>
      <div className={styles.navbarSpacer} />
      <nav className={styles.navItems}>
        <Link to={ROUTES.ABOUT} className={styles.link}>
          About
        </Link>
        <Link to={ROUTES.PROJECTS} className={styles.link}>
          Projects
        </Link>
        <Link to={ROUTES.SKILLS} className={styles.link}>
          Skills
        </Link>
        <Link to={ROUTES.EXPERIENCE} className={styles.link}>
          Experience
        </Link>
        <Link to={ROUTES.CONTACT} className={styles.link}>
          Contact
        </Link>
      </nav>
    </section>
  );
}

export default Navbar;
