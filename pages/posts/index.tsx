import Container from "../../src/components/container";
import Layout from "../../src/components/layout";
import { POSTS_PATH, postFilePaths } from "../../src/lib/api";
import Post from "../../src/interfaces/post";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import PostPreview from "../../src/components/post-preview";
import SEO from "../../src/components/seo-tags";
import { ALL_ARTICLES_PAGE_SEO } from "../../src/lib/constants";
import { sortPostsByDate } from "../../src/lib/utils";

type Props = {
  posts: Post[];
};

const AllArticles = ({ posts }: Props) => {
  return (
    <>
      <SEO metaData={ALL_ARTICLES_PAGE_SEO} />
      <Layout>
        <Container>
          <h1 className="text-center text-4xl font-bold my-10">All Articles</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-10 mb-32">
            {posts.map(({ metaData, filePath }) => (
              <PostPreview
                key={filePath}
                title={metaData.title}
                coverImage={metaData.coverImage}
                date={metaData.date}
                author={metaData.author}
                slug={filePath.replace(/\.md?$/, "")}
                excerpt={metaData.excerpt}
                category={metaData.category}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);

    return {
      metaData: data,
      filePath: filePath.replace(/\.md?$/, ""),
    };
  });

  return { props:  { posts : sortPostsByDate(posts as any) } };
}

export default AllArticles;
