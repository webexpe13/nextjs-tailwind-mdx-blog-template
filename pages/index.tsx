import Container from "../src/components/container";
import MoreStories from "../src/components/more-stories";
import HeroPost from "../src/components/hero-post";
import Layout from "../src/components/layout";
import { POSTS_PATH, postFilePaths } from "../src/lib/api";
import Post from "../src/interfaces/post";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { DEFAULT_SEO } from "../src/lib/constants";
import SEO from "../src/components/seo-tags";
import { sortPostsByDate } from "../src/lib/utils";

type Props = {
  posts: Post[];
};

export default function Index({ posts }: Props) {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  return (
    <>
      <Layout>
        <SEO metaData={DEFAULT_SEO} />
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.metaData.title}
              coverImage={heroPost.metaData.coverImage}
              date={heroPost.metaData.date}
              author={heroPost.metaData.author}
              slug={heroPost.filePath}
              excerpt={heroPost.metaData.excerpt}
              category={heroPost.metaData.category}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);

    return {
      metaData: data,
      filePath: filePath.replace(/\.md?$/, ""),
    };
  });

  return { props: { posts : sortPostsByDate(posts as any) } };
}
