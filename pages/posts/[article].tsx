import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../src/components/container";
import PostHeader from "../../src/components/post-header";
import Layout from "../../src/components/layout";
import { POSTS_PATH, postFilePaths } from "../../src/lib/api";
import PostTitle from "../../src/components/post-title";
import Post from "../../src/interfaces/post";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import MoreStories from "../../src/components/more-stories";
import SEO from "../../src/components/seo-tags";
import { sortPostsByDate } from "../../src/lib/utils";

type Props = {
  source: any;
  metaData: any;
  postPath: string;
  posts: Post[];
};

export default function Post({ source, metaData, postPath, posts }: Props) {
  const router = useRouter();
  if (!router.isFallback && !postPath) {
    return <ErrorPage statusCode={404} />;
  }

  const filteredPosts = posts
    .filter((each) => each.filePath !== `${postPath}.md`)
    .slice(0, 3);

  return (
    <>
      <SEO metaData={metaData} showJsonLD />
      <Layout>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <PostHeader
                  title={metaData.title}
                  coverImage={metaData.coverImage}
                  date={metaData.date}
                  author={metaData.author}
                  category={metaData.category}
                />
                <div className="max-w-3xl mx-auto main-content">
                  <MDXRemote {...source} />
                </div>
              </article>
              {filteredPosts.length > 0 && (
                <MoreStories posts={filteredPosts} />
              )}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.article}.md`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);

    return {
      metaData: data,
      filePath,
    };
  });

  return {
    props: {
      source: mdxSource,
      metaData: data,
      postPath: params.article.replace(/\.md?$/, ""),
      posts: sortPostsByDate(posts as any),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.md?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { article: slug } }));

  return {
    paths,
    fallback: false,
  };
};
