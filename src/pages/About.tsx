import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";
import { useState } from "react";
import GeneralInfo from "../components/about/GeneralInfo";
import Experience from "../components/about/Experience";
import ExtraInfo from "../components/about/ExtraInfo";

const About = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: -1, px: 3 }}>
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
            padding: "6px 120px", // Tab padding
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
        }}
      >
        <Tab label="General"/>
        <Tab label="Experience" />
        <Tab label="Extra" />
      </Tabs>
      <Box>
        {value === 0 && (
          <div className="bg-background-dark !h-[calc(100vh-156px)] w-full rounded-b rounded-r-2xl flex flex-col gap-4 p-4">
            <GeneralInfo />
          </div>
        )}
        {value === 1 && (
          <div className="bg-background-dark !h-[calc(100vh-156px)] w-full rounded-b rounded-r-2xl !px-0 pt-4 !m-0 ">
            <Experience />
          </div>
        )}
        {value === 2 && (
          <div className="bg-background-dark !h-[calc(100vh-156px)] w-full rounded-b rounded-r-2xl p-4 !m-0 ">
            <ExtraInfo />
          </div>
        )}
      </Box>
    </Box>
  );
};

export default About;
