import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AlarmIcon from "@mui/icons-material/Alarm";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card sx={{ maxWidth: 450 }}>
        <CardContent className="flex  items-center gap-4 !py-12 !px-12">
          <h1 className="text-4xl font-bold text-gray-800 font-[system-ui]">
            Coming Soon
          </h1>
          <AlarmIcon sx={{ fontSize: 40 }} className="mt-2" />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
