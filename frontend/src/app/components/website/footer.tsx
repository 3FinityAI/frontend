"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FooterLogoSvg from "../../public/images/logo-footer.svg";
import AppStoreSvg from "../../public/images/app-store.svg";
import PlayStoreSvg from "../../public/images/play-store.svg";

// App store badges
const AppStoreBadge = () => (
  <Box component="a" href="#" sx={{ display: "inline-block", mr: 1 }}>
    <img
      src={AppStoreSvg.src}
      width={140}
      height={42}
      alt="Download on the App Store"
    />
  </Box>
);

const GooglePlayBadge = () => (
  <Box component="a" href="#" sx={{ display: "inline-block" }}>
    <img
      src={PlayStoreSvg.src}
      width={140}
      height={42}
      alt="Get it on Google Play"
    />
  </Box>
);

// Logo component
const Logo = () => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
    <img src={FooterLogoSvg.src} width={187} height={74} alt="footer logo" />
  </Box>
);

// Footer component
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "#010612",
        color: "white",
        mt: "7rem",
        pt: "4rem",
        pb: 4,
        borderTop: "1px solid #1E2235",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and download buttons section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Logo />
              <Stack direction="row" spacing={1} pt={2}>
                <AppStoreBadge />
                <GooglePlayBadge />
              </Stack>
            </Box>
          </Grid>

          {/* Product links section */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Product
            </Typography>
            <Stack spacing={1.5}>
              {["Fitness", "Fashion", "Finance"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="hover"
                  color="#EFEFEF"
                  sx={{
                    display: "block",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company links section */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Company
            </Typography>
            <Stack spacing={1.5}>
              {["Team", "Blogs"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="hover"
                  color="#EFEFEF"
                  sx={{
                    display: "block",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Follow links section */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Follow
            </Typography>
            <Stack spacing={1.5}>
              {["Instagram", "LinkedIn"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="hover"
                  color="#EFEFEF"
                  sx={{
                    display: "block",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
