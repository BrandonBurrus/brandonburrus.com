import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { TITLE, FAVICONS } from '../../constants';

/**
 * Adds any needed meta tags for SEO into the pages head
 */
function Head(props) {
  const { title } = props;

  return (
    <Helmet>
      <title>{`${TITLE} | ${title}`}</title>
      <link
        rel='icon'
        href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
          FAVICONS[Math.floor(Math.random() * FAVICONS.length)]
        }</text></svg>`}
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Rubik:wght@300;400;500&display=swap'
        rel='stylesheet'
      />
      <script src='https://kit.fontawesome.com/ab7aab33df.js' crossOrigin='anonymous' />
    </Helmet>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
