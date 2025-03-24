import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-background-dark p-2 flex flex-col gap-2 font-tech-mono border-primary-border-dark border flex-1">
      {children}
    </div>
  );
};

export default Container;
