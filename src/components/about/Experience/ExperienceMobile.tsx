import EducationTerminalContent from "../../Fragments/EducationTerminalContent";
import ExperienceAboutMeTerminalContent from "../../Fragments/ExperienceAboutMeTerminalContent";
import ExperienceBadgeSkillsTerminalContent from "../../Fragments/ExperienceBadgeSkillsTerminalContent";
import ExperienceTerminalContent from "../../Fragments/ExperienceTerminalContent";
import ProjectsTerminalContent from "../../Fragments/ProjectsTerminalContent";
import SkillsBarTerminalContent from "../../Fragments/SkillsBarTerminalContent";
import Terminal from "../../Fragments/Terminal";

const ExperienceMobile = () => {
  return (
    <div className="md:hidden flex flex-col gap-4">
      <Terminal title="Education" className="col-span-2">
        <EducationTerminalContent />
      </Terminal>

      <Terminal title="About Me">
        <ExperienceAboutMeTerminalContent />
      </Terminal>

      <Terminal title="Skills" className="row-span-2">
        <ExperienceBadgeSkillsTerminalContent />
      </Terminal>

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
  );
};

export default ExperienceMobile;
