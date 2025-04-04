import Terminal from "../Fragments/Terminal";
import profile from "../../assets/images/profile.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn, Twitter } from "@mui/icons-material";
import GeneralAboutMeTerminalContent from "../Fragments/GeneralAboutMeTerminalContent";

const GeneralInfo = () => {
  return (
    <>
      <div className="h-[350px] flex gap-4">
        <div className=" text-white w-[260px]">
          <Terminal title={"pic.png"}>
            <img src={profile} className="object-cover h-[295px]" />
          </Terminal>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className=" text-white flex gap-4 flex-1">
            <div className="flex-1 ">
              <Terminal title={"about_me.exe"}>
                <GeneralAboutMeTerminalContent />
              </Terminal>
            </div>
            <div className="w-[350px]">
              <Terminal title={"contact.pdf"}>
                <h2>{">"} list contacts</h2>
                <div className="flex flex-col gap-4 items-center justify-center h-[175px]">
                  <div className="flex flex-col gap-4">
                    <span className="flex gap-4 items-center">
                      <GitHubIcon />
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        github.com/yourusername
                      </a>
                    </span>
                    <span className="flex gap-4 items-center">
                      <LinkedIn />
                      <a
                        href="https://linkedin.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        linkedin.com/yourusername
                      </a>
                    </span>
                    <span className="flex gap-4 items-center">
                      <Twitter />
                      <a
                        href="https://x.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        x.com/yourusername
                      </a>
                    </span>
                  </div>
                </div>
              </Terminal>
            </div>
          </div>
          <div className=" text-white flex gap-4 h-[100px]">
            <div className=" text-white w-14 flex-1 h-full">
              <Terminal title={"Title"}></Terminal>
            </div>
            <div className=" text-white w-14 flex-1 h-full">
              <Terminal title={"Title"}></Terminal>
            </div>
            <div className=" text-white w-14 flex-1 h-full">
              <Terminal title={"Title"}></Terminal>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Terminal title={""}></Terminal>
      </div>
    </>
  );
};

export default GeneralInfo;
