
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import LatestPosts from "@/components/home/LatestPosts";
import Advertisement from "@/components/home/Advertisement";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="justify-center items-stretch bg-white dark:bg-zinc-950 flex flex-col overflow-hidden">
        <div className="w-full max-md:max-w-full">
          <Navbar />
          <div className="flex w-full flex-col items-center mt-6 max-md:max-w-full">
            <div className="flex w-[1216px] max-w-full flex-col items-center">
              <HeroSection />
              <div className="flex w-full flex-col items-center mt-20 max-md:mt-10">
                <Advertisement />
                <LatestPosts />
              </div>
              <Advertisement className="mt-20 max-md:mt-10" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
