import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  category?: string
};

const PostHeader = ({ title, coverImage, date, author, category }: Props) => {
  return (
    <div className="">
      <PostTitle>{title}</PostTitle>
      <div className="md:mb-12 max-w-3xl mx-auto flex items-center gap-5 mb-4">
        <Avatar name={author.name} picture={author.picture} />
        <span className="inline-block w-[5px] h-[5px] bg-gray-300 rounded-full shrink-0 grow-0"></span>
        <time dateTime={date} className="text-sm block">
          {date}
        </time>
        <span className="inline-block w-[5px] h-[5px] bg-gray-300 rounded-full shrink-0 grow-0"></span>
        <p className="text-sm block">
          {category}
        </p>
      </div>
      <div className="mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </div>
  );
};

export default PostHeader;
