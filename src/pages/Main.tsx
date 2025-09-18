import ComingSoon from "../components/Fragments/cards/ComingSoon";
import Clock from "../components/Fragments/cards/Clock";
import News from "../components/Fragments/News";
import AsciiArt from "../components/Fragments/cards/AsciiArt";
import { NEWS_ARTICLES } from "../db/news";
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import { ArticleOutlined, DesktopWindowsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Main = () => {

  return (

    <div className="flex flex-col gap-4 h-[calc(100vh-112px)] px-4 overflow-hidden">
      <div className="flex gap-2">
        <div className="flex items-center justify-center bg-background-dark border border-primary-border-dark text-primary font-tech-mono text-3xl p-4">
          #71
        </div>

        <div className="flex items-center justify-center bg-background-dark border border-primary-border-dark text-primary font-tech-mono text-3xl p-4 flex-1 overflow-clip">
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

      <div className="flex gap-4">
        <div className="!w-[550px] bg-background-dark border text-sm border-primary-border-dark text-primary font-tech-mono flex items-center justify-center"> 
          <pre>
            {
            ` 
  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
  ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
            `
            }
          </pre>
        </div>

        <div className="flex flex-col items-center justify-between bg-background-dark border text-sm border-primary-border-dark text-primary font-tech-mono flex-1 p-4">
          <span className="font-bold h-fit text-2xl text-gray-300 under py-1 px-2 ">Explore M. Dogancan Y. Portfolio Page</span>
          <div className="flex gap-5 w-full">
            <Link
              to="/about"
              className="flex-1 h-[70px] border border-neutral-400 hover:text-white hover-border-white hover:cursor-pointer hover:bg-neutral-800 rounded flex flex-col items-center justify-center">
              <PersonSearchOutlinedIcon />
              <span>About Me</span>
            </Link>
            <Link to="/news" className="flex-1 h-[70px] border border-neutral-400 hover:text-white hover-border-white hover:cursor-pointer hover:bg-neutral-800 rounded flex flex-col items-center justify-center">
              <ArticleOutlined />
              <span>News</span>
            </Link>
            <Link to="/desktop" className="flex-1 h-[70px] border border-neutral-400 hover:text-white hover-border-white hover:cursor-pointer hover:bg-neutral-800 rounded flex flex-col items-center justify-center">
              <DesktopWindowsOutlined />
              <span>Desktop</span>
            </Link>
          </div>
        </div> 
      </div>

      <div>
        <News />
      </div> 

      <div className="flex gap-2 align-stretch">
        <div className="w-[250px]">
          <AsciiArt />
        </div>
        <div className="w-[350px]">
          <ComingSoon />
        </div>
        <div className="flex-1 bg-background-dark border border-primary-border-dark">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Main;
