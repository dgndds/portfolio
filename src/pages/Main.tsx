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
          #99
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
        <Terminal title="MDY.png" className="md:!w-[300px] h-[400px]">
          <img src={profile} alt="" className="object-cover" />
        </Terminal>

        <Terminal
          title="About.txt"
          className="h-[400px] md:flex-1 md:text-2xl leading-8 text-sm"
        >
          <p className="text-green-400 mb-3 ml-1">{"> cat about.txt"}</p>
          <p className="mb-5">
            &emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In bibendum volutpat ligula, interdum interdum eros malesuada id.
            Praesent metus libero, fermentum porta interdum at, ullamcorper at
            turpis. Donec sit amet est sit amet odio efficitur consectetur.
            Donec lectus mi, accumsan in varius et, finibus vel nulla. Mauris
            sodales, tellus ut vestibulum faucibus, tortor diam vestibulum elit,
            auctor convallis diam erat et dui. Praesent lacus turpis, venenatis
            quis massa at, porttitor vulputate metus. Aliquam a pharetra sapien.
            Sed feugiat ex sapien, eu hendrerit orci finibus vitae. Aenean sed
            mi elementum, efficitur eros vitae, consectetur quam.
          </p>
          <p>
            &emsp;&emsp;Maecenas quis lectus a sapien fermentum dictum. Ut
            semper, neque ut tempor consequat, risus quam aliquam metus, ut
            sodales ex magna vel felis. Nulla pharetra arcu velit, et feugiat
            nulla elementum malesuada. Vestibulum maximus lectus lorem, a rutrum
            ipsum ultricies in. In gravida, erat sit amet sollicitudin auctor,
            odio tellus tristique eros, ut facilisis magna sem ut purus. Cras
            posuere orci consectetur justo consequat finibus. Vivamus pretium
            finibus libero, non vestibulum lorem blandit eleifend. Nullam
            feugiat neque quis libero pharetra euismod. Fusce in sem quis quam
            facilisis gravida.
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
