import { ComponentType } from 'react';

import { LayoutProvider } from '@app/layout';

interface IAppProps {
  Component: ComponentType;
  pageProps: unknown;
}

export const App = ({ Component, pageProps }: IAppProps) => {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}
