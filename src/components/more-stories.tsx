import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl font-bold tracking-tighter leading-tight">
        More Articles
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-10 mb-32">
        {posts.map(({metaData, filePath}) => (
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
    </section>
  );
};

export default MoreStories;
