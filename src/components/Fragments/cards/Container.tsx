import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "bg-background-dark px-4 py-2 flex flex-col gap-2 font-tech-mono border-primary-border-dark border flex-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
