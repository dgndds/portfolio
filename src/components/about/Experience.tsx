import EducationTerminalContent from "../Fragments/EducationTerminalContent";
import SkillsBarTerminalContent from "../Fragments/SkillsBarTerminalContent";
import Terminal from "../Fragments/Terminal";

const Experience = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 text-white gap-4 h-[calc(100vh-186px)] px-4">
      <Terminal title="Education" className="col-span-2">
        <EducationTerminalContent/>
      </Terminal>

      <div className="row-span-2 grid grid-rows-3 gap-4">
        <Terminal title="About Me" />
        <Terminal title="Skills" />
        <Terminal title="Skills" />
      </div>

      <Terminal className="row-span-2" title="Experience" />

      <Terminal title="Skills">
        <SkillsBarTerminalContent />
      </Terminal>

      <Terminal title="Projects" className="col-span-2" />
    </div>
  );
};

export default Experience;
