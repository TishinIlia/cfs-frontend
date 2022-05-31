import React from 'react';
import NextErrorComponent from 'next/error';
import type { ErrorProps } from 'next/error';
import type { NextPage } from 'next';

interface AppErrorProps extends ErrorProps {
  err?: Error;
  hasGetInitialPropsRun?: boolean;
}

const AppError: NextPage<AppErrorProps> = ({
  hasGetInitialPropsRun,
  err,
  statusCode,
}) => {
  if (!hasGetInitialPropsRun && err) {
    // do something with error
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

AppError.getInitialProps = async (ctx) => {
  const errorInitialProps: AppErrorProps =
    await NextErrorComponent.getInitialProps(ctx);
  errorInitialProps.hasGetInitialPropsRun = true;
  if (ctx.err) {
    // do something with error
  }

  return errorInitialProps;
};

export default AppError;
