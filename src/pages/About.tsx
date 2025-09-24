import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";
import { useState } from "react";
import Experience from "../components/about/Experience/Experience";
import GeneralInfo from "../components/about/GeneralInfo/GeneralInfo";
import ExtraInfo from "../components/about/ExtraInfo";
import TerminalTab from "../components/about/TerminalTab";
const About = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: -1, px: { xs: 2, md: 3 }, mb: 2}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="About Me Tabs"
        sx={{
          // Tab container background color
          borderTopLeftRadius: "10px", // Rounded corners
          borderTopRightRadius: "10px", // Rounded corners
          "& .MuiTabs-indicator": {
            display: "none",
          },
          "& .MuiTab-root": {
            padding: { sm: "6px 10px", md: "6px 70px" }, // Tab padding
            fontWeight: "bold",
            backgroundColor: "#353535",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            marginRight: 1,
            color: "#181818",
            fontFamily: "ShareTechMono",
          },
          "& .Mui-selected": {
            color: "#f0f0f0 !important",
            backgroundColor: "#181818",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
          "& .MuiTabs-list": {
            display: { xs: "grid", md: "flex" },
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          },
        }}
      >
        <Tab label="General" />
        <Tab label="Experience" />
        <Tab label="Extra" />
        <Tab label="Terminal" />
      </Tabs>
      <Box sx={{ pr: 1 }}>
        {value === 0 && (
          <div className="bg-background-dark md:!h-[calc(100vh-156px)] w-full rounded-b rounded-r-2xl flex flex-col gap-4 p-4">
            <GeneralInfo />
          </div>
        )}
        {value === 1 && (
          <div className="bg-background-dark md:!h-[calc(100vh-156px)] w-full rounded-b rounded-r-2xl px-4 md:!px-0 py-4 md:pb-0 !m-0">
            <Experience />
          </div>
        )}
        {value === 2 && (
          <div className="bg-background-dark !h-[calc(100vh-156px)] w-full rounded-b rounded-r-2xl p-4 !m-0 ">
            <ExtraInfo />
          </div>
        )}
        {value === 3 && (
          <div className="bg-background-dark !h-[calc(100vh-156px)] w-full rounded-b rounded-r-2xl p-4 !m-0 ">
            <TerminalTab />
          </div>
        )}
      </Box>
    </Box>
  );
};

export default About;
