import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Search, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import MobileSidebar from "./MobileSidebar";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <nav className="flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto w-full py-8">
      <Link to="/" className="text-xl font-bold text-[#4B6BFB]">
        MetaBlog
      </Link>
      
      <div className="hidden md:flex items-center gap-10">
        <div className="flex items-center gap-4 lg:gap-10 text-base text-[#3B3C4A] dark:text-gray-300">
          <Link
            to="/"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/posts"
            className="hover:text-[#4B6BFB] transition-colors"
          >
            All Posts
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
            className="relative items-center hidden lg:flex w-[300px]"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full py-3 pr-12 pl-4 rounded-lg bg-gray-100 dark:bg-zinc-800 outline-none dark:text-gray-300 text-gray-500 placeholder:text-gray-400 text-lg"
            />
            <button 
              type="submit" 
              className="absolute right-3 flex items-center justify-center"
            >
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </form>
          
          <button 
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 transition-all duration-300 ease-in-out"
          >
            <div 
              className={`
                absolute top-1 
                ${theme === 'dark' ? 'translate-x-[2rem]' : 'translate-x-1'} 
                w-6 h-6 rounded-full 
                bg-white 
                transition-all duration-300 ease-in-out
                flex items-center justify-center
                shadow-sm
              `}
            >
              {theme === "dark" ? (
                <Moon className="h-4 w-4 text-slate-700 transition-all duration-300 rotate-0 scale-100" />
              ) : (
                <Sun className="h-4 w-4 text-orange-300 transition-all duration-300 rotate-0 scale-100" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <MobileSidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
