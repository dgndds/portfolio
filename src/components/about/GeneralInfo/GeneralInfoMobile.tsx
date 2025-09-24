import ContactInfoTerminalContent from "../../Fragments/ContanctInfoTerminalContent";
import GeneralAboutMeTerminalContent from "../../Fragments/GeneralAboutMeTerminalContent";
import Terminal from "../../Fragments/Terminal";
import profile from "../../../assets/images/profile.jpg";

const GeneralInfoMobile = () => {
  return (
    <div className="md:hidden flex flex-col gap-4">
      <Terminal title={"pic.png"}>
        <img src={profile} className="object-cover h-[295px]" />
      </Terminal>
      <Terminal title={"about_me.exe"}>
        <GeneralAboutMeTerminalContent />
      </Terminal>

      <Terminal title={"contact.pdf"}>
        <ContactInfoTerminalContent />
      </Terminal>
    </div>
  );
};

export default GeneralInfoMobile;
