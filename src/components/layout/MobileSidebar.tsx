import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 w-[280px] h-full bg-white dark:bg-zinc-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full"
          >
            <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="mt-8 space-y-4">
            <Link
              to="/"
              className="block py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to="/posts"
              className="block py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={onClose}
            >
              All Posts
            </Link>
            <Link
              to="/contact"
              className="block py-3 text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={onClose}
            >
              Contact
            </Link>
          </div>

          {/* Search bar */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;