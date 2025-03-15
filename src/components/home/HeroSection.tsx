
import React from "react";
import Badge from "../common/Badge";
import Author from "../common/Author";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full flex rounded-xl max-md:max-w-full h-[600px] max-md:h-[450px]">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 w-full h-full rounded-xl bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
      </div>
      
      {/* Half card positioned at bottom left */}
      <div className="absolute -bottom-16 left-16 max-md:bottom-8 max-md:left-8 items-stretch bg-white dark:bg-zinc-900/95 flex w-[598px] max-w-[90%] flex-col overflow-hidden p-10 rounded-xl max-md:px-5 shadow-[0_12px_24px_-6px_rgba(0,0,0,0.15)]">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <Badge>Technology</Badge>
          <h1 className="text-[#181A2A] dark:text-gray-200 text-4xl font-semibold leading-10 mt-4 max-md:max-w-full max-md:text-2xl">
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
