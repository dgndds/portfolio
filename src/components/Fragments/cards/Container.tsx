import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-background-dark px-4 py-2 flex flex-col gap-2 font-tech-mono border-primary-border-dark border flex-1">
      {children}
    </div>
  );
};

export default Container;
