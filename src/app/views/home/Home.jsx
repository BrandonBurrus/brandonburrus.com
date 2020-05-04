import React from 'react';
import Navbar from '../../components/nav/Navbar';
import styles from './Home.module.css';
import SocialMediaBar from '../../components/nav/SocialMediaBar';
import PageContainer from '../../components/presentational/PageContainer';

/**
 * Home component that displays all of the important
 * home page details
 */
function HomeView() {
  return (
    <PageContainer className={styles.container}>
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
    </PageContainer>
  );
}

export default HomeView;
