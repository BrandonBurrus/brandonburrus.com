import React from 'react';
import { ROUTES } from '../../constants';
import styles from './SocialMediaBar.module.css';

/**
 * Bottom bar on home page that displays icon links to
 * social media sites
 */
function SocialMediaBar() {
  return (
    <section className={styles.socialMedia}>
      <a href={ROUTES.SOCIAL.LINKED_IN} className={styles.icon}>
        <i className='fab fa-linkedin-in' />
      </a>
      <a href={ROUTES.SOCIAL.GITHUB} className={styles.icon}>
        <i className='fab fa-github' />
      </a>
      <a href={ROUTES.SOCIAL.MEDIUM} className={styles.icon}>
        <i className='fab fa-medium' />
      </a>
      <a href={ROUTES.SOCIAL.HACKER_RANK} className={styles.icon}>
        <i className='fab fa-hackerrank' />
      </a>
    </section>
  );
}

export default SocialMediaBar;
