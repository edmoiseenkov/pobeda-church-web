import { AppProps } from 'next/app';
import React from 'react';

import { Theme } from '@app/core/theme';

// TODO: add settings provider
export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
