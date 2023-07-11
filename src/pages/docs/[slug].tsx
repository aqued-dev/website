import { NavbarNested } from '@/components/DocsNavber';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import { marked } from 'marked';

export async function getStaticProps({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const file = fs.readFileSync(`docs/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content, slug: params.slug } };
}
export async function getStaticPaths() {
  const files = fs.readdirSync('docs');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
const Docs = ({
  frontMatter,
  content,
  slug,
}: {
  frontMatter: { title: string; description: string };
  content: string;
  slug: string;
}) => {
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
          <NavbarNested url={`/docs/${slug}`} />
          <div style={{ marginLeft: '20px' }}>
            <h1>{frontMatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Docs;
