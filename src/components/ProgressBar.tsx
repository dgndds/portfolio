type ProgressBarProps = {
  progress: number; // Progress value as a percentage (0 to 100)
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div
      style={{
        backgroundImage: `
            radial-gradient(rgb(7, 153, 182) 18%, transparent 18%),
            radial-gradient(rgb(7, 153, 182) 18%, transparent 18%)
          `,
        backgroundPosition: "0px 0px, 0px 4px",
        backgroundSize: "4px 8px",
        backgroundColor: "rgb(0, 0, 0)",
        width: "100%",
        height: "25px",
      }}
    >
      <div
        className="h-full bg-[rgba(0,187,187,255)]"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
