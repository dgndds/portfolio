import ProgressBar from "../ProgressBar";

type SkillsBarTerminalContentProps = {
  headlessMode?: boolean;
};

const SkillsBarTerminalContent = ({
  headlessMode = false,
}: SkillsBarTerminalContentProps) => {
  const skills = [
    { name: "JavaScript", level: 89 },
    { name: "TypeScript", level: 77 },
    { name: "React", level: 77 },
    { name: "Node.js", level: 56 },
    { name: "CSS", level: 77 },
  ];

  return (
    <div className="flex flex-col gap-2">
      {!headlessMode && <h2>{">"} list skills</h2>}
      <ul className={`flex gap-5 flex-col ${!headlessMode && "mb-4"}`}>
        {skills.map((skill, index) => (
          <li key={index} className="flex gap-2">
            <strong className="min-w-[18%]">{skill.name}</strong>:
            <ProgressBar progress={skill.level} />
          </li>
        ))}
      </ul>
      {!headlessMode && (
        <span>
          {">"}
          <span className="animate-blink">_</span>
        </span>
      )}
    </div>
  );
};

export default SkillsBarTerminalContent;
