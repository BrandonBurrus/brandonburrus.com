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
      <section className={styles.mainSection}>
        <h2 className={styles.headerText}>
          I am a <span className={styles.swe}>Software Engineer</span>
        </h2>
        <p className={styles.subText}>
          Passionate about creating user experiences, building products, and
          <br />
          developing solutions to real-world problems.
        </p>
        <div className={styles.underbar} />
      </section>
      <SocialMediaBar />
    </Container>
  );
}

export default HomeView;
