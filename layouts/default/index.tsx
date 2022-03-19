import React from 'react';
import { Page } from '@components/Page';
import { ExampleProvider } from '@context/ExampleContext';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({children}: DefaultLayoutProps) => {
  return (
    <ExampleProvider>
      <Page.root>
          {children}
      </Page.root>
    </ExampleProvider>
  );
}
