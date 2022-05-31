import React from 'react';
import '../styles/globals.scss';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
};

export default MyApp;
