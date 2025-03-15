import React from "react";
import Badge from "./Badge";
import Author from "./Author";

interface PostCardProps {
  imageSrc: string;
  title: string;
  category: string;
  authorName: string;
  authorImageSrc: string;
  date: string;
  className?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  imageSrc,
  title,
  category,
  authorName,
  authorImageSrc,
  date,
  className = "",
}) => {
  return (
    <div
      className={`justify-center items-stretch border border-[color:var(--Secondary-100,#E8E8EA)] bg-white flex min-w-60 flex-col overflow-hidden w-[392px] p-4 rounded-xl border-solid ${className}`}
    >
      <img
        src={imageSrc}
        className="aspect-[1.5] object-contain w-[360px] self-center max-w-full rounded-md"
        alt={title}
      />
      <div className="flex w-full flex-col items-stretch mt-4 p-2">
        <div className="flex w-full flex-col items-stretch">
          <Badge variant="outline">{category}</Badge>
          <div className="text-[#181A2A] text-2xl font-semibold leading-7 mt-4">
            {title}
          </div>
        </div>
        <div className="flex items-center gap-5 text-base text-[#97989F] mt-5">
          <Author name={authorName} imageSrc={authorImageSrc} />
          <div className="font-normal self-stretch my-auto">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
