import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import LatestPosts from "@/components/home/LatestPosts";
import Advertisement from "@/components/home/Advertisement";
import { ThemeProvider } from "@/components/ThemeProvider";
import PostDetails from "@/pages/PostDetails";
import { Outlet, Route, Routes } from "react-router-dom";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="justify-center items-stretch bg-white dark:bg-zinc-950 flex flex-col overflow-hidden">
        <div className="w-full max-md:max-w-full">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
