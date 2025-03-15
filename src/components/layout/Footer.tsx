import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "../common/NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-[color:var(--Secondary-100,#E8E8EA)] bg-[#F6F6F7] w-full mt-[100px] pt-16 px-[352px] border-t border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex gap-5 flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 flex-col items-stretch w-[289px]">
          <div className="max-w-full w-[280px]">
            <div className="text-[#181A2A] text-lg font-semibold leading-loose">
              About
            </div>
            <div className="text-[#696A75] text-base font-normal leading-6 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
          <div className="text-base text-[#181a2a] font-semibold leading-6 mt-6">
            <div>
              Email :{" "}
              <span className="font-normal text-[#3B3C4A]">
                info@jstemplate.net
              </span>
            </div>
            <div className="mt-1">
              Phone :{" "}
              <span className="font-normal text-[#3B3C4A]">
                880 123 456 789
              </span>
            </div>
          </div>
        </div>
        <div className="flex min-w-60 gap-[40px_80px] justify-center flex-wrap w-[495px] max-md:max-w-full">
          <div className="flex flex-col items-stretch">
            <div className="text-[#181A2A] text-lg font-semibold leading-loose">
              Quick Link
            </div>
            <div className="text-base text-[#3B3C4A] font-normal whitespace-nowrap mt-6">
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
          <div className="whitespace-nowrap">
            <div className="text-[#181A2A] text-lg font-semibold leading-loose">
              Category
            </div>
            <div className="text-base text-[#3B3C4A] font-normal mt-6">
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
        </div>
        <NewsletterForm />
      </div>
      <div className="items-center border-t-[color:var(--Secondary-200,#DCDDDF)] flex w-full max-w-[1216px] gap-[40px_64px] flex-wrap mt-16 py-8 border-t border-solid max-md:max-w-full max-md:mt-10">
        <div className="self-stretch flex min-w-60 items-center gap-2.5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20aacbd5d433969b2f305fded15753e26c9c876212b2ff307793679e1b745890?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
            alt="Logo"
          />
          <div className="self-stretch min-w-60 my-auto">
            <div className="text-[#141624] text-xl font-bold leading-[1.4]">
              <span className="font-normal text-[#141624]">Meta</span>
              <span className="font-extrabold text-[#141624]">Blog</span>
            </div>
            <div className="text-[#3b3c4a] text-base font-normal leading-6">
              © <span className="text-[#141624]">JS Template</span> 2023. All
              Rights Reserved.
            </div>
          </div>
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-4 text-base text-[#3B3C4A] font-normal flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <Link
            to="/terms"
            className="self-stretch my-auto hover:text-[#4B6BFB] transition-colors"
          >
            Terms of Use
          </Link>
          <div className="border bg-[#E8E8EA] self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(232,232,234,1)] border-solid" />
          <Link
            to="/privacy"
            className="self-stretch my-auto hover:text-[#4B6BFB] transition-colors"
          >
            Privacy Policy
          </Link>
          <div className="border bg-[#E8E8EA] self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(232,232,234,1)] border-solid" />
          <Link
            to="/cookie"
            className="self-stretch my-auto hover:text-[#4B6BFB] transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
