const ExperienceBadgeSkillsTerminalContent = () => {
  const TERMINAL_LENGTH = 25;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-bold text-blue-400">
          <span className="whitespace-nowrap">
            ┌─+++ Frontend +++{`─`.repeat(TERMINAL_LENGTH - "Frontend".length)}┐
          </span>
        </h3>
        <div className="flex flex-wrap gap-2 mt-2 ml-1 w-[400px]">
          <span className="bg-blue-500 text-white px-2 py-1 rounded">
            React
          </span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded">
            TypeScript
          </span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded">
            Tailwind CSS
          </span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded">
            Next.js
          </span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded">
            Redux
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-green-400">
          <span className="whitespace-nowrap">
            ┌─+++ Backend +++{`─`.repeat(TERMINAL_LENGTH - "Backend".length)}┐
          </span>
        </h3>
        <div className="flex flex-wrap gap-2 mt-2 ml-1 w-[400px]">
          <span className="bg-green-500 text-white px-2 py-1 rounded">
            Node.js
          </span>
          <span className="bg-green-500 text-white px-2 py-1 rounded">
            Express
          </span>
          <span className="bg-green-500 text-white px-2 py-1 rounded">
            MongoDB
          </span>
          <span className="bg-green-500 text-white px-2 py-1 rounded">
            PostgreSQL
          </span>
          <span className="bg-green-500 text-white px-2 py-1 rounded">
            GraphQL
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-purple-400">
          <span className="whitespace-nowrap">
            ┌─+++ Tools +++{`─`.repeat(TERMINAL_LENGTH - "Tools".length)}┐
          </span>
        </h3>
        <div className="flex flex-wrap gap-2 mt-2 ml-1 w-[400px]">
          <span className="bg-purple-500 text-white px-2 py-1 rounded">
            Git
          </span>
          <span className="bg-purple-500 text-white px-2 py-1 rounded">
            Docker
          </span>
          <span className="bg-purple-500 text-white px-2 py-1 rounded">
            VS Code
          </span>
          <span className="bg-purple-500 text-white px-2 py-1 rounded">
            Jira
          </span>
          <span className="bg-purple-500 text-white px-2 py-1 rounded">
            Figma
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-yellow-400">
          <span className="whitespace-nowrap">
            ┌─+++ DevOps +++{`─`.repeat(TERMINAL_LENGTH - "DevOps".length)}┐
          </span>
        </h3>

        <div className="flex flex-wrap gap-2 mt-2 ml-1 w-[400px]">
          <span className="bg-yellow-500 text-white px-2 py-1 rounded">
            AWS
          </span>
          <span className="bg-yellow-500 text-white px-2 py-1 rounded">
            Kubernetes
          </span>
          <span className="bg-yellow-500 text-white px-2 py-1 rounded">
            CI/CD
          </span>
          <span className="bg-yellow-500 text-white px-2 py-1 rounded">
            Terraform
          </span>
        </div>
      </div>
    </div>
  );
};
export default ExperienceBadgeSkillsTerminalContent;
