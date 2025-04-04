import ContactInfoTerminalContent from "../Fragments/ContanctInfoTerminalContent";
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
          {
            command: "help",
            content: (
              <div>
                <p>Available commands:</p>
                <ul>
                  <li>
                    <strong>list</strong> - Lists various categories (e.g.,
                    skills, projects, etc.)
                  </li>
                  <li>
                    <strong>whoami</strong> - Displays information about the
                    user
                  </li>
                  <li>
                    <strong>contact</strong> - Displays contact information
                  </li>
                  <li>
                    <strong>theme</strong> - Switches between available themes
                  </li>
                  <li>
                    <strong>quote</strong> - Displays an inspirational quote
                  </li>
                  <li>
                    <strong>help</strong> - Displays this help message
                  </li>
                </ul>
              </div>
            ),
            examples: [
              {
                usage: "help",
                description: "displays a list of available commands",
              },
            ],
          },
          {
            command: "contact",
            content: <ContactInfoTerminalContent headlessMode />,
            examples: [
              {
                usage: "contact",
                description: "displays contact information",
              },
            ],
          },
          {
            command: "theme",
            content: (
              <div>
                <p>Available themes:</p>
                <ul>
                  <li>light</li>
                  <li>dark</li>
                  <li>solarized</li>
                </ul>
              </div>
            ),
            examples: [
              {
                usage: "theme light",
                description: "switches to the light theme",
              },
              {
                usage: "theme dark",
                description: "switches to the dark theme",
              },
              {
                usage: "theme solarized",
                description: "switches to the solarized theme",
              },
            ],
            commandValues: [
              {
                value: "light",
                content: <div>Switched to light theme!</div>,
              },
              {
                value: "dark",
                content: <div>Switched to dark theme!</div>,
              },
              {
                value: "solarized",
                content: <div>Switched to solarized theme!</div>,
              },
            ],
          },
          {
            command: "quote",
            content: (
              <div>
                <p>
                  "The only way to do great work is to love what you do." -
                  Steve Jobs
                </p>
              </div>
            ),
            examples: [
              {
                usage: "quote",
                description: "displays an inspirational quote",
              },
            ],
          },
        ]}
      ></RealTerminal>
    </div>
  );
};

export default ExtraInfo;
