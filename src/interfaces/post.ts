import type Author from "./author";

type PostType = {
  filePath: string;
  metaData: {
    title: string;
    date: string;
    coverImage?: string;
    author?: Author;
    excerpt?: string;
    ogImage?: string;
    content?: string;
    mdxSource: any;
    category?: string;
    tags?: string;
    keywords?: string;
  };
};

export default PostType;
