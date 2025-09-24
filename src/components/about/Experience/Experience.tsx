import EducationTerminalContent from "../../Fragments/EducationTerminalContent";
import ExperienceAboutMeTerminalContent from "../../Fragments/ExperienceAboutMeTerminalContent";
import ExperienceBadgeSkillsTerminalContent from "../../Fragments/ExperienceBadgeSkillsTerminalContent";
import ExperienceTerminalContent from "../../Fragments/ExperienceTerminalContent";
import ProjectsTerminalContent from "../../Fragments/ProjectsTerminalContent";
import SkillsBarTerminalContent from "../../Fragments/SkillsBarTerminalContent";
import Terminal from "../../Fragments/Terminal";
import ExperienceMobile from "./ExperienceMobile";

const Experience = () => {
  return (
    <>
      <div className="hidden md:grid grid-cols-3 grid-rows-3 text-white gap-4 h-[calc(100vh-186px)] px-4">
        <Terminal title="Education" className="col-span-2">
          <EducationTerminalContent />
        </Terminal>

        <div className="xl:row-span-2 xl:grid grid-rows-3 gap-4">
          <Terminal title="About Me">
            <ExperienceAboutMeTerminalContent />
          </Terminal>

          <Terminal title="Skills" className="row-span-2">
            <ExperienceBadgeSkillsTerminalContent />
          </Terminal>
        </div>

        <Terminal className="row-span-2" title="Experience">
          <ExperienceTerminalContent />
        </Terminal>

        <Terminal title="Skills">
          <SkillsBarTerminalContent />
        </Terminal>

        <Terminal title="Projects" className="col-span-2">
          <ProjectsTerminalContent />
        </Terminal>
      </div>
      <ExperienceMobile />
    </>
  );
};

export default Experience;
