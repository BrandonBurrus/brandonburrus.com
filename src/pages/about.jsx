import React from 'react';
import Head from '../app/components/seo/Head';
import Navbar from '../app/components/nav/Navbar';
import PageContainer from '../app/components/presentational/PageContainer';

function AboutPage() {
  return (
    <PageContainer>
      <Head title='About Me' />
      <Navbar />
    </PageContainer>
  );
}

export default AboutPage;
