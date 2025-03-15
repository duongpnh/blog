
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
    <nav className="flex items-center justify-between px-[350px] py-8 max-md:px-5">
      <Link to="/" className="text-xl font-bold text-[#4B6BFB]">
        MetaBlog
      </Link>
      
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-10 text-base text-[#3B3C4A] dark:text-gray-300">
          <Link
            to="/"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/single-post"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            Single Post
          </Link>
          <Link
            to="/pages"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            Pages
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <form
            onSubmit={handleSearch}
            className="relative items-center bg-zinc-100 dark:bg-zinc-800 flex w-[166px]"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full py-2 pl-4 pr-8 rounded-[5px] bg-transparent outline-none dark:text-gray-300"
            />
            <button 
              type="submit" 
              className="absolute right-2 flex items-center justify-center"
            >
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
            className="w-10 h-10 rounded-full object-cover"
            alt="User avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
