import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { useState, useEffect } from 'react';
import HeaderMenu from '@/components/Headers';
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: isDarkMode ? 'dark' : 'light',
        fontFamily: 'Noto Sans JP, sans-serif',
      }}
    >
      <HeaderMenu
        links={[
          {
            link: '/',
            label: 'ホーム',
          },
          {
            link: '/docs',
            label: 'Docs',
          },
          {
            link: '/docs/command-list',
            label: 'コマンドリスト',
          },
          {
            link: '/about',
            label: 'Botについて',
          },
          {
            link: 'https://discord.com/api/oauth2/authorize?client_id=979877840382197790&permissions=1644971949559&scope=bot%20applications.commands',
            label: 'Botを招待',
          },
          {
            link: 'https://discord.gg/rE75MJswYw',
            label: 'サポートサーバー',
          },
        ]}
        url="/docs"
      />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
