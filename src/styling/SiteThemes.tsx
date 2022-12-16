import { createTheme } from "@mui/material/styles";
import { color } from "@mui/system";
import { transform } from "typescript";

export const siteThemes = createTheme({
  palette: {
    primary: {
      main: "#5F9DF7",
      // Navbar main color, Mui element outlines
    },
    secondary: {
      light: "#79DAE8",
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
    // MuiButton: {
    //   styleOverrides: {
    //    textPrimary: {
    //    }
    //   },
    // },
    MuiMenuItem: {
      styleOverrides: {
        root: { color: "#001D6E" },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: { color: "#001D6E" },
      },
    },
    MuiDayPicker: {
      styleOverrides: {
        header: { backgroundColor: "#FFF7E9" },
        weekDayLabel: { color: "#001D6E" },
        weekContainer: { backgroundColor: "#E8F9FD" },
        slideTransition: { backgroundColor: "#FFF7E9" },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: { backgroundColor: "#FFF7E9" },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: { padding: 0 },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: { color: "#001D6E" },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        // root: { margin: 50 },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: { color: "#001D6E" },
      },
    },
  },
});
