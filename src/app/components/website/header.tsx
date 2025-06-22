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
import SignupModal from "./Signup";
import SigninModal from "./Signin";
import ResetPasswordModal from "./ResetPassword";
import TermsModal from "./TermsModal";

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
    { label: "Blogs", path: "/blogs" },
    { label: "About", path: "#about" },
  ];

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleClose = () => {
    setIsResetOpen(false);
    setIsSigninOpen(false);
    setIsSignupOpen(false);
    setIsTermsOpen(false);
  }
  const handleBackToLogin = () => {
    setIsResetOpen(false);
    setIsSigninOpen(true);
  }

  const handleTerms = () => {
    setIsTermsOpen(true);
    setIsSignupOpen(false);
  }

  // Auth buttons component to avoid duplication
  const AuthButtons = ({
    className = styles.authContainer,
    buttonClassName = "",
  }) => (
    <div className={className}>
      <button className={`${styles.signInButton} ${buttonClassName}`} onClick={() => setIsSigninOpen(true)}>
        Sign In
      </button>
      <button className={`${styles.signUpButton} ${buttonClassName}`} onClick={() => setIsSignupOpen(true)}>
        Sign Up
      </button>
    </div>
  );

  const mobileMenu = (
    <div className={styles.mobileMenuContainer}>
      <div className={styles.mobileMenuHeader}>
        <img src={"/images/logo.svg"} width={150} height={33} alt="3finity Logo" />
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
            <img src={"/images/logo.svg"} width={187} height={41} alt="3finity Logo" />
            <div style={{ flexGrow: 1 }}></div>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  return (
    <>
    <AppBar position="static" className={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={styles.toolbar}>
          <a href="/"><img src={"/images/logo.svg"} width={187} height={41} alt="3finity Logo" /></a>

          {!isMobile && (
            <Box className={styles.navLinks}>
              {navLinks.map((link, index) => (
                <a href={link.path} >
                <button key={index} className={styles.navButton}>
                  {link.label}
                </button>
                </a>
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
    <SigninModal isOpen={isSigninOpen} onClose={handleClose} onReset={() => setIsResetOpen(true)} onSignup={() => setIsSignupOpen(true)} />
    <SignupModal isOpen={isSignupOpen} onClose={handleClose} onTerms={handleTerms}/>
    <ResetPasswordModal isOpen={isResetOpen} onClose={handleClose} onBackToLogin={handleBackToLogin}/>
    <TermsModal isOpen={isTermsOpen} onClose={handleClose}/>
    </>
  );
};

export default Header;
