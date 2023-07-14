import HeroBullets from '@/components/Hero';
import Head from 'next/head';
import Link from 'next/link';
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
        <div style={{ marginLeft: '10px' }}>
          <h1>Botについて</h1>
          <p>
            Aqued(旧EightBot)は2022年5月に開発が始まった多機能Botです。
            <br /> 現在はTypeScriptで開発されています。
          </p>
          <h2>サポートサーバー</h2>
          <Link href="https://discord.gg/rE75MJswYw">
            こちらから参加が可能です。
          </Link>
          <h2>botの招待</h2>
          <Link href="https://discord.com/api/oauth2/authorize?client_id=979877840382197790&permissions=1644971949559&scope=bot%20applications.commands">
            こちらからどうぞ。
          </Link>
          <h2>公式アカウント等</h2>
          <p>
            github:
            <Link href="https://github.com/aqued-dev">
              https://github.com/aqued-dev
            </Link>
            <br />
            mail:
            <Link href="mailto:contact@aqued-dev.gx1285.com">contact@aqued-dev.gx1285.com</Link>
            <br /> bluesky:
            <Link href="https://bsky.app/profile/aqued.bsky.social">
              https://bsky.app/profile/aqued.bsky.social
            </Link>
            <br />
            twitter:
            <Link href="https://twitter.com/AquedDev">
              https://twitter.com/AquedDev
            </Link>
            <br />
            youtube:
            <Link href="https://www.youtube.com/@Aqued-dev">
              https://www.youtube.com/@Aqued-dev
            </Link>
            <br />
          </p>
        </div>
      </main>
    </>
  );
}
