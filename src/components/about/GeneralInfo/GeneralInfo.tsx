import Terminal from "../../Fragments/Terminal";
import profile from "../../../assets/images/profile.jpg";
import GeneralAboutMeTerminalContent from "../../Fragments/GeneralAboutMeTerminalContent";
import ContactInfoTerminalContent from "../../Fragments/ContanctInfoTerminalContent";
import GeneralInfoMobile from "./GeneralInfoMobile";

const GeneralInfo = () => {
  return (
    <>
      <div className="h-[350px] md:flex gap-4 hidden">
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
                <ContactInfoTerminalContent />
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
      <div className="flex-1 hidden md:block">
        <Terminal title={""}></Terminal>
      </div>

      <GeneralInfoMobile/>
    </>
  );
};

export default GeneralInfo;
