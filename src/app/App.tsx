import { AppProps } from 'next/app';
import React from 'react';

import { Theme } from '@app/core/theme';
import { ModalProvider, SettingsProvider } from '@app/core/providers';
import { Footer, Header } from '@app/components';

export const App = ({ Component, pageProps: { settings, props } }: AppProps) => {
  return (
    <SettingsProvider settings={settings}>
      <Theme>
        <ModalProvider>
          {(Component as any).header !== false && <Header />}
          <Component {...props} />
          {(Component as any).footer !== false && <Footer />}
        </ModalProvider>
      </Theme>
    </SettingsProvider>
  );
}
