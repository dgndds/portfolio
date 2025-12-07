import News from "../components/Fragments/News";
import { NEWS_ARTICLES } from "../db/news";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import { ArticleOutlined, DesktopWindowsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Terminal from "../components/Fragments/Terminal";

import profile from "../assets/images/profile.jpg";

const Main = () => {
  return (
    <div className="flex flex-col gap-4 px-4 overflow-hidden mt-26 md:mt-0">
      <div className="flex gap-2">
        <div className="flex items-center justify-center bg-background-dark border border-primary-border-dark text-primary font-tech-mono md:text-3xl md:p-4 text-xl p-2">
          #108
        </div>

        <div className="flex items-center justify-center bg-background-dark border border-primary-border-dark text-primary font-tech-mono md:text-3xl p-4 flex-1 overflow-clip text-xl w-[100px]">
          <div className="animate-marquee flex flex-row items-center shrink-0">
            <div className="w-2 h-2 mx-5 bg-white" />
            <p>{NEWS_ARTICLES[NEWS_ARTICLES.length - 1].content}</p>

            <div className="w-2 h-2 mx-5 bg-white" />
            <p>{NEWS_ARTICLES[NEWS_ARTICLES.length - 2].content}</p>

            <div className="w-2 h-2 mx-5 bg-white" />
            <p>{NEWS_ARTICLES[NEWS_ARTICLES.length - 3].content}</p>

            <div className="w-2 h-2 mx-5 bg-white" />
            <p>{NEWS_ARTICLES[NEWS_ARTICLES.length - 1].content}</p>

            <div className="w-2 h-2 mx-5 bg-white" />
            <p>{NEWS_ARTICLES[NEWS_ARTICLES.length - 2].content}</p>

            <div className="w-2 h-2 mx-5 bg-white" />
            <p>{NEWS_ARTICLES[NEWS_ARTICLES.length - 3].content}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <div className="md:!w-[400px] lg:!w-[550px] p-2 bg-background-dark border lg:text-sm md:text-[10px] text-[7px] border-primary-border-dark text-primary font-tech-mono flex items-center justify-center">
          <pre>
            {` 
  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
  ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
            `}
          </pre>
        </div>

        <div className="flex flex-col items-center justify-between bg-background-dark border text-sm border-primary-border-dark text-primary font-tech-mono flex-1 p-4">
          <span className="font-bold h-fit text-2xl text-gray-300 under py-1 px-2 text-center mb-2">
            Explore M. Dogancan Y. Portfolio Page
          </span>
          <div className="flex gap-5 w-full">
            <Link
              to="/about"
              className="flex-1 h-[70px] border border-neutral-400 hover:text-white hover-border-white hover:cursor-pointer hover:bg-neutral-800 rounded flex flex-col items-center justify-center"
            >
              <PersonSearchOutlinedIcon />
              <span>About Me</span>
            </Link>
            <Link
              to="/news"
              className="flex-1 h-[70px] border border-neutral-400 hover:text-white hover-border-white hover:cursor-pointer hover:bg-neutral-800 rounded flex flex-col items-center justify-center"
            >
              <ArticleOutlined />
              <span>News</span>
            </Link>
            <Link
              to="/desktop"
              className="flex-1 h-[70px] border border-neutral-400 hover:text-white hover-border-white hover:cursor-pointer hover:bg-neutral-800 rounded flex flex-col items-center justify-center"
            >
              <DesktopWindowsOutlined />
              <span>Desktop</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col xs:flex-row">
        <Terminal title="MDY.png">
          <img src={profile} alt="" className="object-cover md:!w-[300px] h-[344px] p-2" />
        </Terminal>

        <Terminal
          title="About.txt"
          className="h-[400px] md:flex-1 md:text-2xl leading-8 text-sm"
        >
          <p className="text-green-400 mb-3 ml-1">{"> cat about.txt"}</p>
          <p className="mb-5">
            &emsp;&emsp;I’m <span className="text-green-600 font-bold">Muhammed Doğancan Yılmazoğlu</span>, 
            a <span className="text-property-dark font-bold">Frontend Developer</span> with a strong foundation 
            in <span className="text-class-dark font-bold">computer engineering</span> and hands-on experience building modern, scalable web applications. After 
            graduating from Bilkent University, I worked across multiple teams and industries, contributing 
            to digital learning platforms, low-code solutions, internal corporate tools, and full-stack applications. 
            I specialize in React, Next.js, Angular, and Vue, and I enjoy creating clean, responsive interfaces using 
            tools like Tailwind CSS, Material UI, Shadcn/UI, and Radix UI. I’ve also gained experience 
            in SSR, state management, testing, and API integrations, and I consistently follow clean 
            architecture principles to deliver maintainable, high-quality code.
          </p>
          <p>
            &emsp;&emsp;Throughout my career, I’ve built and contributed to diverse projects—from full-stack Next.js applications and habit-tracking platforms to desktop applications with Electron and Java Spring Boot backends. I’m passionate about crafting smooth user experiences, solving complex problems, and continuously improving my skills. Outside of work, I enjoy exploring new technologies that push my creativity and technical boundaries. I aim to build meaningful products that combine thoughtful design with strong engineering.
          </p>
        </Terminal>
      </div>

      <hr className="bg-primary-border-dark h-0.5 my-2 border-0" />

      <div className="mb-6">
        <News />
      </div>
    </div>
  );
};

export default Main;
