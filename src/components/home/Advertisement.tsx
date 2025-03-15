import React from "react";

interface AdvertisementProps {
  className?: string;
}

export const Advertisement: React.FC<AdvertisementProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`justify-center items-center bg-[#E8E8EA] flex min-h-[100px] w-[750px] max-w-full flex-col text-[#696A75] font-normal text-center rounded-xl ${className}`}
    >
      <div className="flex flex-col items-center">
        <div className="text-sm leading-none">Advertisement</div>
        <div className="text-xl font-semibold leading-[1.2]">
          You can place ads
        </div>
        <div className="text-lg leading-none">750x100</div>
      </div>
    </div>
  );
};

export default Advertisement;
