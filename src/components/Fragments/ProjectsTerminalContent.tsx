const ProjectsTerminalContent = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="bg-primary-border-dark p-2 rounded">
        <p className="text-token-neon">[2023]</p>
        <p className="text-white">Portfolio Website</p>
        <p className="text-primary-light">
          A personal portfolio showcasing my projects and skills.
        </p>
      </div>
      <div className="bg-primary-border-dark p-2 rounded">
        <p className="text-token-neon">[2022]</p>
        <p className="text-white">E-Commerce Platform</p>
        <p className="text-primary-light">
          Developed a full-stack e-commerce application with React and Node.js.
        </p>
      </div>
      <div className="bg-primary-border-dark p-2 rounded">
        <p className="text-token-neon">[2021]</p>
        <p className="text-white">Open Source Contributions</p>
        <p className="text-primary-light">
          Contributed to various open-source projects on GitHub.
        </p>
      </div>
    </div>
  );
};
export default ProjectsTerminalContent;
