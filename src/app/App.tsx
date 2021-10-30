import { AppProps } from 'next/app';
import React from 'react';

import { Theme } from '@app/core/theme';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
