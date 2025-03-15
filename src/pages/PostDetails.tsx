import React from "react";
import Badge from "../components/common/Badge";
import Author from "../components/common/Author";

interface PostDetailsProps {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
  authorName: string;
  authorImageSrc: string;
  date: string;
  content: string;
}

const post: PostDetailsProps = {
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
    content: `
      <p>Technology is fundamentally changing how we work. From the adoption of artificial intelligence (AI) and automation to the rise of remote work and digital collaboration tools, the modern workplace is undergoing an unprecedented digital transformation.</p>

      <h2>The Evolution of Remote Work</h2>
      <p>The COVID-19 pandemic accelerated the shift to remote work. Companies quickly adopted platforms like Zoom, Microsoft Teams, and Slack to maintain business operations. Today, hybrid work models have become the new standard, offering employees greater flexibility and work-life balance.</p>

      <h2>Automation and AI in the Workplace</h2>
      <p>Artificial intelligence and automation are transforming how many jobs are performed. Repetitive tasks are being automated, allowing employees to focus on more creative and strategic work. However, this also presents challenges regarding workforce reskilling and upskilling.</p>

      <h2>Security and Privacy</h2>
      <p>With more data being stored and processed digitally, information security and privacy have become top priorities. Companies must invest in robust security solutions and train employees on best security practices.</p>

      <h2>The Future of Work</h2>
      <p>As technology continues to evolve, the workplace of the future will become increasingly digital and flexible. Digital skills, adaptability, and continuous learning will be crucial for success in the modern work environment.</p>
    `
};

const PostDetails: React.FC = () => {
  const {
    imageSrc,
    title,
    category,
    authorName,
    authorImageSrc,
    date,
    content,
  } = post;

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <div className="space-y-4">
        <Badge variant="outline">{category}</Badge>
        
        <h1 className="text-3xl md:text-4xl font-bold text-[#181A2A] dark:text-gray-200">
          {title}
        </h1>

        <div className="flex items-center gap-5 text-base text-[#97989F] dark:text-gray-200">
          <Author name={authorName} imageSrc={authorImageSrc} />
          <div className="font-normal">{date}</div>
        </div>

        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[400px] object-cover rounded-xl my-8"
        />

        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default PostDetails;