import AlarmIcon from "@mui/icons-material/Alarm";
import Container from "./Container";

const ComingSoon = () => {
  return (
    <Container className="h-full">
      <div className="flex justify-center items-center gap-4 h-full">
        <h1 className="text-4xl font-bold text-primary font-tech-mono">
          Coming Soon
        </h1>
        <AlarmIcon sx={{ fontSize: 40 }} className="text-primary" />
      </div>
    </Container>
  );
};

export default ComingSoon;
