import React from 'react';
import Navbar from '../../components/nav/Navbar';
import { Container } from '@material-ui/core';
import styles from './Home.module.css';

/**
 * Home component that displays all of the important
 * home page details
 */
function HomeView() {
  return (
    <Container disableGutters className={styles.container}>
      <Navbar />
      {/* <section>
        <h2>
          I'm a <span>Software Engineer</span>
        </h2>
        <p>
          Passionate about creating user experiences, building products, and developing solutions to
          real-world problems.
        </p>
      </section> */}
      {/* <div>
        <section>
          <Link to={ROUTES.SOCIAL.LINKED_IN}>LinkedIn</Link>
          <Link to={ROUTES.SOCIAL.GITHUB}>GitHub</Link>
          <Link to={ROUTES.SOCIAL.MEDIUM}>Medium</Link>
          <Link to={ROUTES.SOCIAL.HACKER_RANK}>HackerRank</Link>
        </section>
      </div> */}
    </Container>
  );
}

export default HomeView;
