"use client";
import { createTheme, PaletteOptions } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

// Define your theme colors
const lightPalette: PaletteOptions = {
  primary: {
    main: "#0080E8",
    light: "#4DA3FF",
    dark: "#0061B0",
    contrastText: "#fff",
  },
  secondary: {
    main: "#00C4B4",
    light: "#5EFFF0",
    dark: "#009385",
    contrastText: "#fff",
  },
  error: {
    main: "#f44336",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },
  text: {
    primary: "#212121",
    secondary: "#757575",
  },
  mode: "light" as PaletteMode,
};

const darkPalette: PaletteOptions = {
  primary: {
    main: "#0080E8",
    light: "#4DA3FF",
    dark: "#0061B0",
    contrastText: "#fff",
  },
  secondary: {
    main: "#00C4B4",
    light: "#5EFFF0",
    dark: "#009385",
    contrastText: "#fff",
  },
  error: {
    main: "#f44336",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  background: {
    default: "#121212",
    paper: "#1E1E1E",
  },
  text: {
    primary: "#ffffff",
    secondary: "#B0B0B0",
  },
  mode: "dark" as PaletteMode,
};

// Define typography options
const typography = {
  fontFamily: [
    "Roboto",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Arial",
    "sans-serif",
  ].join(","),
  h1: {
    fontSize: "2.5rem",
    fontWeight: 500,
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 500,
  },
  // Add more typography settings as needed
};

// Create light and dark themes
const createAppTheme = (mode = "light") => {
  return createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography: typography,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow:
              mode === "light"
                ? "0px 2px 8px rgba(0, 0, 0, 0.1)"
                : "0px 2px 8px rgba(0, 0, 0, 0.5)",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow:
              mode === "light"
                ? "0px 1px 3px rgba(0, 0, 0, 0.1)"
                : "0px 1px 3px rgba(0, 0, 0, 0.3)",
          },
        },
      },
      // Add more component style overrides as needed
    },
  });
};

// Export the themes and creator function
export const lightTheme = createAppTheme("light");
export const darkTheme = createAppTheme("dark");
export { createAppTheme };
