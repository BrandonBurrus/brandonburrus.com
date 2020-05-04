import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './PageContainer.module.css';

function PageContainer(props) {
  const { className, children } = props;

  return (
    <Container disableGutters className={`${className} ${styles.pageContainer}`}>
      {children}
    </Container>
  );
}

PageContainer.propTypes = {
  className: PropTypes.string,
};

export default PageContainer;
