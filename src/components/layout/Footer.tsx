
import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "../common/NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-[color:var(--Secondary-100,#E8E8EA)] bg-[#F6F6F7] dark:bg-zinc-900 dark:border-zinc-800 w-full mt-[100px] pt-16 px-[352px] border-t border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex justify-between gap-5 flex-wrap max-md:max-w-full">
        <div className="flex flex-col items-stretch max-w-[280px]">
          <div className="text-[#181A2A] dark:text-white text-lg font-semibold leading-loose">
            About
          </div>
          <div className="text-[#696A75] dark:text-gray-400 text-base font-normal leading-6 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam
          </div>
          <div className="text-base text-[#181a2a] dark:text-white font-semibold leading-6 mt-6">
            <div>
              Email :{" "}
              <span className="font-normal text-[#3B3C4A] dark:text-gray-400">
                info@jstemplate.net
              </span>
            </div>
            <div className="mt-1">
              Phone :{" "}
              <span className="font-normal text-[#3B3C4A] dark:text-gray-400">
                880 123 456 789
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-stretch">
          <div className="text-[#181A2A] dark:text-white text-lg font-semibold leading-loose">
            Quick Link
          </div>
          <div className="text-base text-[#3B3C4A] dark:text-gray-400 font-normal whitespace-nowrap mt-6">
            <Link
              to="/"
              className="block hover:text-[#4B6BFB] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/archived"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              Archived
            </Link>
            <Link
              to="/author"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              Author
            </Link>
            <Link
              to="/contact"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col items-stretch">
          <div className="text-[#181A2A] dark:text-white text-lg font-semibold leading-loose">
            Category
          </div>
          <div className="text-base text-[#3B3C4A] dark:text-gray-400 font-normal mt-6">
            <Link
              to="/category/lifestyle"
              className="block hover:text-[#4B6BFB] transition-colors"
            >
              Lifestyle
            </Link>
            <Link
              to="/category/technology"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              Technology
            </Link>
            <Link
              to="/category/travel"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              Travel
            </Link>
            <Link
              to="/category/business"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              Business
            </Link>
            <Link
              to="/category/economy"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              Economy
            </Link>
            <Link
              to="/category/sports"
              className="block mt-2 hover:text-[#4B6BFB] transition-colors"
            >
              Sports
            </Link>
          </div>
        </div>
        
        <NewsletterForm />
      </div>
      
      <div className="items-center border-t-[color:var(--Secondary-200,#DCDDDF)] dark:border-zinc-800 flex justify-between w-full max-w-[1216px] mt-16 py-8 border-t border-solid max-md:max-w-full max-md:mt-10 max-md:flex-wrap">
        <div className="flex items-center gap-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20aacbd5d433969b2f305fded15753e26c9c876212b2ff307793679e1b745890?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-12 shrink-0 rounded-[0px_0px_0px_0px]"
            alt="Logo"
          />
          <div>
            <div className="text-[#141624] dark:text-white text-xl font-bold leading-[1.4]">
              <span className="font-normal">Meta</span>
              <span className="font-extrabold">Blog</span>
            </div>
            <div className="text-[#3b3c4a] dark:text-gray-400 text-base font-normal leading-6">
              © <span className="text-[#141624] dark:text-white">JS Template</span> 2023. All
              Rights Reserved.
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-base text-[#3B3C4A] dark:text-gray-400 font-normal">
          <Link
            to="/terms"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            Terms of Use
          </Link>
          <div className="border bg-[#E8E8EA] dark:bg-zinc-700 w-0 h-6 border-[rgba(232,232,234,1)] dark:border-zinc-700 border-solid" />
          <Link
            to="/privacy"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            Privacy Policy
          </Link>
          <div className="border bg-[#E8E8EA] dark:bg-zinc-700 w-0 h-6 border-[rgba(232,232,234,1)] dark:border-zinc-700 border-solid" />
          <Link
            to="/cookie"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
