import React from 'react';
import { Link } from 'gatsby';
import { ROUTES } from '../../constants';
import styles from './Home.module.css';

/**
 * Home component that displays all of the important
 * home page details
 */
function HomeView() {
  return (
    <div>
      <section>
        <h1>Hi! My name is Brandon Burrus</h1>
        <h2>
          I'm a <span>Software Engineer</span>
        </h2>
        <p>
          Passionate about creating user experiences, building products, and developing solutions to
          real-world problems.
        </p>
      </section>
      <div>
        <nav>
          <Link to={ROUTES.HOME}>About</Link>
          <Link to={ROUTES.HOME}>Projects</Link>
          <Link to={ROUTES.HOME}>Skills</Link>
          <Link to={ROUTES.HOME}>Experience</Link>
          <Link to={ROUTES.HOME}>Contact </Link>
        </nav>
        <section>
          <Link to={ROUTES.SOCIAL.LINKED_IN}>LinkedIn</Link>
          <Link to={ROUTES.SOCIAL.GITHUB}>GitHub</Link>
          <Link to={ROUTES.SOCIAL.MEDIUM}>Medium</Link>
          <Link to={ROUTES.SOCIAL.HACKER_RANK}>HackerRank</Link>
        </section>
      </div>
    </div>
  );
}

export default HomeView;
