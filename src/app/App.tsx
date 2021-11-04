import { AppProps } from 'next/app';
import React from 'react';

import { Theme } from '@app/core/theme';
import { SettingsProvider } from '@app/core/providers';

export const App = ({ Component, pageProps: { settings, props } }: AppProps) => {
  return (
    <SettingsProvider settings={settings}>
      <Theme>
        <Component {...props} />
      </Theme>
    </SettingsProvider>
  );
}
