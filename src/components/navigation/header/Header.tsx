import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ChevronRight } from "@mui/icons-material";
import ListLink from "../Link";

function Header() {
  return (
    <AppBar position="fixed" className="fixed top-0 !bg-black">
      <Container
        maxWidth="xl"
        className="flex items-center md:gap-8 flex-col sm:flex-row"
      >
        <Toolbar disableGutters>
          <ChevronRight sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/portfolio/#"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            className="!min-h-content"
          >
            MDY_
          </Typography>
        </Toolbar>

        <div className="flex md:gap-8 gap-4">
          <ListLink path="/" title="Home" />
          <ListLink path="/about" title="About" />
          <ListLink path="/news" title="News" />
          <ListLink path="/desktop" title="Desktop" />
          <ListLink path="/blog" title="Blog" />
        </div>
      </Container>
    </AppBar>
  );
}

export default Header;
