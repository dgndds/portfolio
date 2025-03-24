import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ChevronRight } from "@mui/icons-material";
import ListLink from "../Link";

function Header() {
  return (
    <AppBar position="fixed" className="fixed top-0 !bg-black">
      <Container maxWidth="xl" className="flex items-center gap-8">
        <Toolbar disableGutters>
          <ChevronRight sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MDY_
          </Typography>
        </Toolbar>

        <div className="flex gap-8">
          <ListLink path="/" title="Home" />
          <ListLink path="/about" title="About" />
        </div>
      </Container>
    </AppBar>
  );
}

export default Header;
