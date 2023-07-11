import HeroBullets from '@/components/Hero';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Aqued</title>
        <meta name="description" content="Aquedのサイトです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroBullets />
      </main>
    </>
  );
}
