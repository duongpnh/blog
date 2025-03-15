import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  return (
    <nav className="flex flex-col items-stretch font-normal justify-center px-[350px] py-8 max-md:max-w-full max-md:px-5">
      <div className="flex gap-[40px_118px] max-md:max-w-full">
        <div className="flex min-w-60 items-center gap-[21px] flex-wrap max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-10 text-base text-[#3B3C4A] justify-center flex-wrap w-[667px] my-auto max-md:max-w-full">
            <Link
              to="/"
              className="self-stretch gap-1 whitespace-nowrap my-auto hover:text-[#4B6BFB] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="self-stretch gap-1 whitespace-nowrap my-auto hover:text-[#4B6BFB] transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/single-post"
              className="self-stretch gap-1 my-auto hover:text-[#4B6BFB] transition-colors"
            >
              Single Post
            </Link>
            <Link
              to="/pages"
              className="self-stretch gap-1 whitespace-nowrap my-auto hover:text-[#4B6BFB] transition-colors"
            >
              Pages
            </Link>
            <Link
              to="/contact"
              className="self-stretch gap-1 whitespace-nowrap my-auto hover:text-[#4B6BFB] transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="self-stretch flex min-w-60 items-center gap-10 text-sm text-zinc-400 whitespace-nowrap leading-none my-auto">
            <form
              onSubmit={handleSearch}
              className="items-center bg-zinc-100 self-stretch flex gap-3 w-[166px] my-auto pl-4 pr-2 py-2 rounded-[5px]"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent outline-none"
              />
              <button type="submit">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f54d40e4571eeda5ba2a62a3d4cc6be4ae7c71c48b636a65191a0a615c3f340?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto cursor-pointer"
                  alt="Search"
                />
              </button>
            </form>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf6e768d5bc4daacaadc77a247586e9a4fe3f7d2dfcc1914352841f94b9e965e?placeholderIfAbsent=true"
              className="aspect-[1.72] object-contain w-12 self-stretch shrink-0 my-auto rounded-[100px]"
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
