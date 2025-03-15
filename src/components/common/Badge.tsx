
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "inline-flex w-max gap-1 text-sm font-medium whitespace-nowrap leading-none px-2.5 py-1 rounded-md";

  const variantStyles = {
    primary: "bg-[#4B6BFB] text-white",
    outline: "bg-[rgba(75,107,251,0.05)] text-[#4B6BFB]",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
