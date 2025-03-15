import HeroSection from "@/components/home/HeroSection";
import LatestPosts from "@/components/home/LatestPosts";
import Advertisement from "@/components/home/Advertisement";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center mt-6 max-md:max-w-full">
      <div className="flex w-[1216px] max-w-full flex-col items-center">
        <HeroSection />
        <div className="flex w-full flex-col items-center mt-40 max-md:mt-10">
          <Advertisement />
          <LatestPosts />
        </div>
        <Advertisement className="mt-20 max-md:mt-10" />
      </div>
    </div>
  );
};

export default Home;
