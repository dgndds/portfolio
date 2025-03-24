const ConsoleDemo = () => {
  return (
    <div className="bg-background-dark p-2 flex flex-col gap-2 font-tech-mono border-primary-border-dark border flex-1">
      <div className="flex gap-2">
        <span className="text-primary font-thin">12:42:45 PM</span>
        <span className="text-property">{"[vite]"}</span>
        <span className="text-primary">{"(client)"}</span>
        <span className="text-token-dark">hmr update</span>
        <span className="text-primary">/src/App.tsx, /src/index.css</span>
        <span className="text-class-light">{"(x18)"}</span>
      </div>

      <div className="flex gap-2 ">
        <span className="text-primary font-thin">12:42:45 PM</span>
        <span className="text-property">{"[vite]"}</span>
        <span className="text-primary">{"(client)"}</span>
        <span className="text-token-dark">hmr update</span>
        <span className="text-primary">/src/App.tsx, /src/index.css</span>
        <span className="text-class-light">{"(x18)"}</span>
      </div>
    </div>
  );
};

export default ConsoleDemo;
