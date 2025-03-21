import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ChevronRight } from "@mui/icons-material";

function Header() {
  return (
    <AppBar position="fixed" className="fixed top-0 !bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ChevronRight sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
      </Container>
    </AppBar>
  );
}

export default Header;
