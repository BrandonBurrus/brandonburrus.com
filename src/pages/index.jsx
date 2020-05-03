import React from 'react';
import Head from '../app/components/seo/Head';
import HomeView from '../app/views/home/Home';
import Navbar from '../app/components/nav/Navbar';

/**
 * Home page
 */
const IndexPage = () => (
  <>
    <Head title='Passionate about Software.' />
    <HomeView />
  </>
);

export default IndexPage;
