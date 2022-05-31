import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../src/components/base/Header';
import Footer from '../src/components/base/Footer';

const Home: NextPage = () => (
  <div>
    <Head>
      <title> Central Fire Services</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>Hey there!</main>
    <Footer />
  </div>
);

export default Home;
