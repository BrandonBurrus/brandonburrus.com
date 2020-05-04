import React from 'react';
import PageContainer from '../app/components/presentational/PageContainer';
import Head from '../app/components/seo/Head';
import Navbar from '../app/components/nav/Navbar';

function ContactPage() {
  return (
    <PageContainer>
      <Head title='Contact Me' />
      <Navbar />
    </PageContainer>
  );
}

export default ContactPage;
