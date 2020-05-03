import React from 'react';
import Navbar from '../../components/nav/Navbar';
import { Container } from '@material-ui/core';
import styles from './Home.module.css';
import SocialMediaBar from '../../components/nav/SocialMediaBar';

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
      {/* <SocialMediaBar /> */}
    </Container>
  );
}

export default HomeView;
