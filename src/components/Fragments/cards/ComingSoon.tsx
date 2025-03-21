import { Card, CardContent } from "@mui/material"
import AlarmIcon from "@mui/icons-material/Alarm"

const ComingSoon = () => {
    return (<Card className="w-[450px]">
    <CardContent className="flex justify-center bg-background-dark border border-primary-border-dark items-center gap-4 !py-12 !px-12">
      <h1 className="text-4xl font-bold text-primary font-[system-ui]">
        Coming Soon
      </h1>
      <AlarmIcon sx={{ fontSize: 40 }} className="mt-2 text-primary" />
    </CardContent>
  </Card>)
} 

export default ComingSoon