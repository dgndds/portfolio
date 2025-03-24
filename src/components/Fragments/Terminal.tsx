import { twMerge } from "tailwind-merge";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from "@mui/icons-material/Close";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

interface TerminalProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
}

//shadow-[0px_0px_5px_2.5px_rgba(16,137,99,0.75)]

const Terminal = ({ className, title, children }: TerminalProps) => {
  return (
    <div
      className={twMerge(
        "bg-[#151515] border-2 border-primary-border h-full",
        className
      )}
    >
      <div className="h-9 bg-primary-border-dark flex items-center justify-between px-2 font-tech-mono font-bold text-[#efefef] text-[12px]">
        {title}

        <div className="flex gap-2">
          <HorizontalRuleIcon sx={{ fontSize: 15 }} />
          <CropSquareIcon sx={{ fontSize: 15 }} />
          <CloseIcon sx={{ fontSize: 15 }} />
        </div>
      </div>

      <div className="text-[#ffffffc2] p-2 font-tech-mono ">
        {children ? (
          children
        ) : (
          <>
            {"> npm run install"}
            <span className="animate-blink">_</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Terminal;
