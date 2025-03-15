
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Search, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex flex-col items-stretch font-normal justify-center px-[350px] py-8 max-md:max-w-full max-md:px-5">
      <div className="flex gap-[40px_118px] max-md:max-w-full">
        <div className="flex min-w-60 items-center gap-[21px] flex-wrap max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-10 text-base text-[#3B3C4A] justify-center flex-wrap w-[667px] my-auto max-md:max-w-full dark:text-gray-300">
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
              className="items-center bg-zinc-100 dark:bg-zinc-800 self-stretch flex gap-3 w-[166px] my-auto pl-4 pr-2 py-2 rounded-[5px]"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent outline-none dark:text-gray-300"
              />
              <button type="submit" className="flex items-center justify-center">
                <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </button>
            </form>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>
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
