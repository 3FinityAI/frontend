"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./header.module.scss";
import LogoSvg from "../../public/images/logo.svg";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Add useEffect to handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigation links array to avoid code duplication
  const navLinks = [
    { label: "Overview", path: "#overview" },
    { label: "Solution", path: "#solution" },
    { label: "Blogs", path: "#blogs" },
    { label: "About", path: "#about" },
  ];

  // Auth buttons component to avoid duplication
  const AuthButtons = ({
    className = styles.authContainer,
    buttonClassName = "",
  }) => (
    <div className={className}>
      <button className={`${styles.signInButton} ${buttonClassName}`}>
        Sign In
      </button>
      <button className={`${styles.signUpButton} ${buttonClassName}`}>
        Sign Up
      </button>
    </div>
  );

  const mobileMenu = (
    <div className={styles.mobileMenuContainer}>
      <div className={styles.mobileMenuHeader}>
        <img src={LogoSvg.src} width={150} height={33} alt="3finity Logo" />
        <IconButton
          className={styles.closeMenuButton}
          onClick={handleDrawerToggle}
          aria-label="close menu"
        >
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      <List className={styles.mobileNavLinks}>
        {navLinks.map((link, index) => (
          <ListItem key={index} className={styles.mobileNavItem}>
            <button className={styles.mobileNavButton}>{link.label}</button>
          </ListItem>
        ))}
      </List>
      <AuthButtons className={styles.mobileAuthContainer} />
    </div>
  );

  // Return null during server-side rendering or before hydration
  if (!mounted) {
    return (
      <AppBar position="static" className={styles.appBar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters className={styles.toolbar}>
            <img src={LogoSvg.src} width={187} height={41} alt="3finity Logo" />
            <div style={{ flexGrow: 1 }}></div>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  return (
    <AppBar position="static" className={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={styles.toolbar}>
          <img src={LogoSvg.src} width={187} height={41} alt="3finity Logo" />

          {!isMobile && (
            <Box className={styles.navLinks}>
              {navLinks.map((link, index) => (
                <button key={index} className={styles.navButton}>
                  {link.label}
                </button>
              ))}
            </Box>
          )}

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={handleDrawerToggle}
              className={styles.menuButton}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <AuthButtons />
          )}

          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
            className={styles.drawer}
            PaperProps={{
              className: styles.drawerPaper,
            }}
          >
            {mobileMenu}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
