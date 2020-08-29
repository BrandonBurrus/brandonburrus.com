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
          <Link
            to={ROUTES.HOME}
            className={styles.headerText}
            activeClassName={styles.activeNavItem}
          >
            Brandon&nbsp;Burrus
          </Link>
        </h1>
      </header>
      {/* <div className={styles.navbarSpacer} /> */}
      {/* <nav className={styles.navItems}> */}
      {/*   <Link to={ROUTES.ABOUT} className={styles.link} activeClassName={styles.activeNavItem}> */}
      {/*     About */}
      {/*   </Link> */}
      {/*   <Link to={ROUTES.PROJECTS} className={styles.link} activeClassName={styles.activeNavItem}> */}
      {/*     Projects */}
      {/*   </Link> */}
      {/*   <Link to={ROUTES.EXPERIENCE} className={styles.link} activeClassName={styles.activeNavItem}> */}
      {/*     Experience */}
      {/*   </Link> */}
      {/*   <Link to={ROUTES.CONTACT} className={styles.link} activeClassName={styles.activeNavItem}> */}
      {/*     Contact */}
      {/*   </Link> */}
      {/* </nav> */}
    </section>
  );
}

export default Navbar;
