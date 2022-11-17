import { createTheme } from "@mui/material/styles";
import { transform } from "typescript";

export const siteThemes = createTheme({
  palette: {
    primary: {
      main: "#5F9DF7",
      // Navbar main color, Mui element outlines
    },
    secondary: {
      light: "#FFF7E9",
      main: "#FFF7E9",
      contrastText: "#1746A2",
      // Navbar text, Mui button text
    },
    background: {
      default: "#1746A2",
      // Main backdrop
    },
    text: {
      primary: "#FFF7E9",
      // All major text
    },
  },

  components: {
    MuiGrid: {
      styleOverrides: {
        root: { padding: 0 },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // root: { color: "#FF731D !important" },s
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        // root: { margin: 50 },
      },
    },
  },
});
