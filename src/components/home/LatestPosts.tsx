import React from "react";
import PostCard from "../common/PostCard";

// Sample post data
const posts = [
  {
    id: 1,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bbe7e33ac4cfa7078bba661865571598feff9381f56887079a3f27b672c4dfaf?placeholderIfAbsent=true",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    authorName: "Tracey Wilson",
    authorImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b4b460db42ad544b4e1113305dd4c9bf663f39a10da4cb2ae7e5b0d184a2ca40?placeholderIfAbsent=true",
    date: "August 20, 2022",
  },
  {
    id: 2,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/006ea91a693ca6a9c4e1b7341925cb3b04b7cd5713d28a404fb3356e7c6716c8?placeholderIfAbsent=true",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    authorName: "Jason Francisco",
    authorImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8097e64c8289acfa0f49b5dc1a0c52633199877aa852fc265ef9b6480058edcf?placeholderIfAbsent=true",
    date: "August 20, 2022",
  },
  {
    id: 3,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/23fdd59336336d20de8fcf366f30e92f5b171958b8c6cd0a1c0f76f3b9ce5141?placeholderIfAbsent=true",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    authorName: "Elizabeth Slavin",
    authorImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6310f929db53574c81be20d763fc9a0efd105e478525c324963ca9df9fb5b68f?placeholderIfAbsent=true",
    date: "August 20, 2022",
  },
  {
    id: 4,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f5b53c7c13aae8418bb7577f7e53f7baa50124688b254ada8adeb34bf78f75?placeholderIfAbsent=true",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    authorName: "Ernie Smith",
    authorImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/727d67f7dac9b182d06e756865e6c43553757bdc7284ad8564f5a837fbfc8e0b?placeholderIfAbsent=true",
    date: "August 20, 2022",
  },
  {
    id: 5,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/971dc833a77909ae5789a96e2137fb1033287dc7bd25f08e63f4818b6782e0c8?placeholderIfAbsent=true",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    authorName: "Eric Smith",
    authorImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1670e6543a990ee32cc8e0bf9474f0e30d1c242882f741e2a21c90625e89a115?placeholderIfAbsent=true",
    date: "August 20, 2022",
  },
  {
    id: 6,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2254a1b63a70fc011c47db4098d64eabc67d017b32578c5547d09e9f136cf5e4?placeholderIfAbsent=true",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    authorName: "Tracey Wilson",
    authorImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b4b460db42ad544b4e1113305dd4c9bf663f39a10da4cb2ae7e5b0d184a2ca40?placeholderIfAbsent=true",
    date: "August 20, 2022",
  },
  {
    id: 7,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b31401243bbb282ce39013d91b4fcdc921757973d1fee1c8dcb1dd4b2027d?placeholderIfAbsent=true",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    authorName: "Jason Francisco",
    authorImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8097e64c8289acfa0f49b5dc1a0c52633199877aa852fc265ef9b6480058edcf?placeholderIfAbsent=true",
    date: "August 20, 2022",
  },
  {
    id: 8,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9ded6ed4726cae2ea3b25324cdb263b7625c93adcb6bca24573ca355d2dd629e?placeholderIfAbsent=true",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    authorName: "Elizabeth Slavin",
    authorImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6310f929db53574c81be20d763fc9a0efd105e478525c324963ca9df9fb5b68f?placeholderIfAbsent=true",
    date: "August 20, 2022",
  },
  {
    id: 9,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d27013a286c0de1f811a41e1ef8a7996a1b9244e68720fac8934a87839e355c4?placeholderIfAbsent=true",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    authorName: "Ernie Smith",
    authorImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/727d67f7dac9b182d06e756865e6c43553757bdc7284ad8564f5a837fbfc8e0b?placeholderIfAbsent=true",
    date: "August 20, 2022",
  },
];

export const LatestPosts: React.FC = () => {
  return (
    <div className="items-center flex w-full max-w-[1216px] flex-col mt-20 max-md:max-w-full max-md:mt-10">
      <div className="self-stretch flex-1 shrink basis-[0%] w-full gap-8 text-2xl text-[#181A2A] font-bold leading-none max-md:max-w-full">
        Latest Post
      </div>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 flex-wrap max-md:max-w-full">
          {posts.slice(0, 3).map((post) => (
            <PostCard
              key={post.id}
              imageSrc={post.imageSrc}
              title={post.title}
              category={post.category}
              authorName={post.authorName}
              authorImageSrc={post.authorImageSrc}
              date={post.date}
            />
          ))}
        </div>
        <div className="flex gap-5 flex-wrap mt-5 max-md:max-w-full">
          {posts.slice(3, 6).map((post) => (
            <PostCard
              key={post.id}
              imageSrc={post.imageSrc}
              title={post.title}
              category={post.category}
              authorName={post.authorName}
              authorImageSrc={post.authorImageSrc}
              date={post.date}
            />
          ))}
        </div>
        <div className="flex gap-5 flex-wrap mt-5 max-md:max-w-full">
          {posts.slice(6, 9).map((post) => (
            <PostCard
              key={post.id}
              imageSrc={post.imageSrc}
              title={post.title}
              category={post.category}
              authorName={post.authorName}
              authorImageSrc={post.authorImageSrc}
              date={post.date}
            />
          ))}
        </div>
      </div>
      <button className="self-stretch border gap-3 overflow-hidden text-base text-[#696A75] font-medium mt-8 px-5 py-3 rounded-md border-[rgba(105,106,117,0.3)] border-solid hover:bg-gray-50 transition-colors">
        View All Post
      </button>
    </div>
  );
};

export default LatestPosts;
