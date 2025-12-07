type EducationTerminalContentProps = {
  headlessMode?: boolean;
};

const EducationTerminalContent = ({
  headlessMode = false,
}: EducationTerminalContentProps) => {
  return (
    <>
      {!headlessMode && (
        <>
          <p className="text-class-light">{">"} ls /education</p>
          <ul className="pl-4">
            <li className="text-property">bachelor_computer_science.txt</li>
            <li className="text-property">master_software_engineering.txt</li>
            <li className="text-property">online_courses.txt</li>
          </ul>
          <p className="text-class-light mt-2">
            {">"} cat bachelor_computer_science.txt
          </p>
        </>
      )}
      <p className="pl-4 text-gray-300">
        Bachelor of <span className="text-class-dark">Computer Science</span>{" "}
        from
        <span className="text-token-dark"> Bilkent University (2018 - 2022)</span>.
        Focused on algorithms, data structures, and software development.
      </p>
    </>
  );
};

export default EducationTerminalContent;
