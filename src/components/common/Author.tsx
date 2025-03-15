import React from "react";

interface AuthorProps {
  name: string;
  imageSrc: string;
  className?: string;
}

export const Author: React.FC<AuthorProps> = ({
  name,
  imageSrc,
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex items-center gap-3 font-medium my-auto ${className}`}
    >
      <img
        src={imageSrc}
        className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto rounded-[28px]"
        alt={`${name}'s profile`}
      />
      <div className="self-stretch my-auto">{name}</div>
    </div>
  );
};

export default Author;
