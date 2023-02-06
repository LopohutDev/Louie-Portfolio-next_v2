import React from "react";

interface ComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<ComponentProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`bg-white min-h-[170px] w-full text-black p-10 md:p-14 rounded-[50px] font-semibold ${
        className && className
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
