import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import Avatar from "./avatar";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  category?: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  author,
  category,
}: Props) => {
  return (
    <div className="mb-5">
      <div className="flex-shrink-0 mb-4 max-h-[185px] overflow-y-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      <h3 className="text-xl md:text-2xl mb-3">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-3 text-sm flex items-center gap-x-3">
        <time dateTime={date}>{date}</time>
        <span className="inline-block w-[5px] h-[5px] bg-gray-300 rounded-full shrink-0 grow-0"></span>
        <p>{category}</p>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
