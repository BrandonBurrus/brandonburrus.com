import React from 'react';
import Head from '../app/components/seo/Head';
import HomeView from '../app/views/home/Home';
import MeshParticle from '../app/components/fx/MeshParticle';

/**
 * Home page
 */
const IndexPage = () => (
  <>
    <Head title='Passionate about Software.' />
    <HomeView />
    <MeshParticle />
  </>
);

export default IndexPage;
