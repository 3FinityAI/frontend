"use client";
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// Updated import path to use the new theme file location
import { useColorMode } from "./../../utils/theme";

const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <Tooltip
      title={
        theme.palette.mode === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      <IconButton
        onClick={colorMode.toggleColorMode}
        color="inherit"
        aria-label="toggle light/dark theme"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
