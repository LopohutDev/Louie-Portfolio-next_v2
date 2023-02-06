import React from "react";

interface ComponentProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  children: React.ReactNode;
}
const ButtonInfo: React.FC<ComponentProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`w-full px-5 py-3 text-lg transition-all duration-200 border-2 rounded-full border-lime-400 hover:bg-lime-400 hover:bg-opacity-75 hover:text-black ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonInfo;
