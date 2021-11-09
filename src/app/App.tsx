import { AppProps } from 'next/app';
import React from 'react';

import { Theme } from '@app/core/theme';
import { SettingsProvider } from '@app/core/providers';
import { Footer, Header } from '@app/components';

export const App = ({ Component, pageProps: { settings, props } }: AppProps) => {
  return (
    <SettingsProvider settings={settings}>
      <Theme>
        <Header />
        <Component {...props} />
        <Footer />
      </Theme>
    </SettingsProvider>
  );
}
