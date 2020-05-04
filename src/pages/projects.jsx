import React from 'react';
import PageContainer from '../app/components/presentational/PageContainer';
import Head from '../app/components/seo/Head';
import Navbar from '../app/components/nav/Navbar';

function ProjectsPage() {
  return (
    <PageContainer>
      <Head title='My Projects' />
      <Navbar />
    </PageContainer>
  );
}

export default ProjectsPage;
