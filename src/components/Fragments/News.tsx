import Container from "./cards/Container";
import NewsEntry from "./cards/NewsEntry";

const News = () => {
  return (
    <Container>
      <div className="text-primary text-lg flex items-center">
        <div className="flex-1 font-tech-mono text-2xl">News</div>
        <div className="text-sm text-secondary underline underline-offset-8">
          View all
        </div>
      </div>

      <div className="flex gap-2 flex-col">
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
