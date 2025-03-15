import React from "react";
import Badge from "../common/Badge";
import Author from "../common/Author";

export const HeroSection: React.FC = () => {
  return (
    <div className="flex w-full flex-col pt-[360px] px-[72px] rounded-xl max-md:pt-[100px] max-md:px-5">
      <div className="items-stretch border border-[color:var(--Secondary-100,#E8E8EA)] shadow-[0px_12px_24px_-6px_rgba(24,26,42,0.12)] bg-white flex w-[598px] max-w-full flex-col overflow-hidden p-10 rounded-xl border-solid max-md:px-5">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <Badge>Technology</Badge>
          <h1 className="text-[#181A2A] text-4xl font-semibold leading-10 mt-4 max-md:max-w-full">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
        </div>
        <div className="flex items-center gap-5 text-base text-[#97989F] mt-6">
          <Author
            name="Jason Francisco"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8097e64c8289acfa0f49b5dc1a0c52633199877aa852fc265ef9b6480058edcf?placeholderIfAbsent=true"
          />
          <div className="font-normal self-stretch my-auto">
            August 20, 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
