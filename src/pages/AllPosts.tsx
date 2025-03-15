import LatestPosts from "@/components/home/LatestPosts";

const AllPosts = () => {
  return (
    <div className="flex w-full flex-col items-center mt-6 max-md:max-w-full">
      <div className="flex w-[1216px] max-w-full flex-col items-center">
        <div className="flex w-full flex-col items-center max-md:mt-10">
          <LatestPosts />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
