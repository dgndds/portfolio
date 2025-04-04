import EducationTerminalContent from "../Fragments/EducationTerminalContent";
import ExperienceAboutMeTerminalContent from "../Fragments/ExperienceAboutMeTerminalContent";
import ExperienceTerminalContent from "../Fragments/ExperienceTerminalContent";
import GeneralAboutMeTerminalContent from "../Fragments/GeneralAboutMeTerminalContent";
import ProjectsTerminalContent from "../Fragments/ProjectsTerminalContent";
import RealTerminal from "../Fragments/RealTerminal";
import SkillsBarTerminalContent from "../Fragments/SkillsBarTerminalContent";

const ExtraInfo = () => {
  return (
    <div className="h-full">
      <RealTerminal
        title={"Real"}
        commands={[
          {
            command: "list",
            commandValues: [
              {
                value: "skills",
                content: <SkillsBarTerminalContent headlessMode />,
              },
              { value: "projects", content: <ProjectsTerminalContent /> },
              { value: "experience", content: <ExperienceTerminalContent /> },
              {
                value: "education",
                content: <EducationTerminalContent headlessMode />,
              },
            ],
            examples: [
              {
                usage: "list skills",
                description: "lists all skills",
              },
              {
                usage: "list projects",
                description: "lists all projects",
              },
              {
                usage: "list experience",
                description: "lists all experience",
              },
            ],
          },
          {
            command: "whoami",
            content: <ExperienceAboutMeTerminalContent />,
            examples: [
              {
                usage: "whoami",
                description: "displays information about the user",
              },
              {
                usage: "whoami --detailed",
                description:
                  "displays information about the user in more detail",
              },
            ],
            commandValues: [
              {
                value: "--detailed",
                content: <GeneralAboutMeTerminalContent />,
              },
            ],
          },
        ]}
      ></RealTerminal>
    </div>
  );
};

export default ExtraInfo;
