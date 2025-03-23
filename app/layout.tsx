'use client';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../src/components/header/header';
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/GlobalStyle'


export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const hideHeaderRoutes = ['/login', '/cadastro'];
  const shouldShowHeader = !hideHeaderRoutes.includes(pathname);

  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {shouldShowHeader && <Header />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}