import Container from "./cards/Container";
import NewsEntry from "./cards/NewsEntry";

const News = () => {
  return (
    <Container>
      {/* <div className="text-white text-lg flex items-center bg-primary-border-dark px-2">
       */}
      <div className="flex items-center text-white border-b border-primary-border py-2">
        <div className="flex-1 font-tech-mono text-2xl">News</div>
        <div className="text-sm text-secondary underline underline-offset-4">
          View all
        </div>
      </div>

      <div className="flex gap-2 flex-col pt-2">
        <NewsEntry
          date="24/03/2025 MON"
          type="mdy"
          subtype="news"
          title="News Section Created"
          description="News Section created and added to main page"
          count={1}
        />
        <NewsEntry
          date="24/03/2025 MON"
          type="mdy"
          subtype="news"
          title="About Me Page Launched"
          description="Check out the new About Me page to learn more about me and my work."
          count={2}
        />
      </div>
    </Container>
  );
};

export default News;
