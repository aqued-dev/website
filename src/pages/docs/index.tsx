import { NavbarNested } from '@/components/DocsNavber';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';

export async function getStaticProps() {
  const file = fs.readFileSync(`docs/overview.md`, 'utf-8');
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content, slug: '/docs' } };
}
export default function Home({
  frontMatter,
  content,
  slug,
}: {
  frontMatter: { title: string; description: string };
  content: string;
  slug: string;
}) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} - Aqued Docs</title>
        <meta name="description" content={frontMatter.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{ display: 'flex' }}>
          <NavbarNested url={slug} />
          <div style={{ marginLeft: '20px' }}>
            <h1>{frontMatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </main>
    </>
  );
}
