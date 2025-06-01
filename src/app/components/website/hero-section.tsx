"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Stack, Card } from "@mui/material";
import styles from "./hero-section.module.scss";
import PlayStoreSvg from "../../public/images/play-store.svg";
import AppStoreSvg from "../../public/images/app-store.svg";
import IndianFlagPng from "../../public/images/india-flag-icon.png";
import AbstractTopPng from "../../public/images/3d-abstract-top.png";
import AbstractRightPng from "../../public/images/3d-abstract-right.png";
import AbstractBottomPng from "../../public/images/3d-abstract-bottom.png";
import HeroImagePng from "../../public/images/hero-image.png";

// Remove dynamic layout changes by not using useMediaQuery
const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted state only after hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.heroWrapper}>
      {/* Static hidden content during SSR - avoids hydration mismatch completely */}
      {!mounted && (
        <Box className={styles.heroSection}>
          <Container maxWidth="lg">
            <div style={{ height: "100vh" }}></div>
          </Container>
        </Box>
      )}

      {/* Only render actual content client-side */}
      {mounted && (
        <Box className={styles.heroSection}>
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className={styles.contentWrapper}>
                {/* Made in India badge */}
                <Card className={styles.indiaBadge}>
                  <img
                    src={IndianFlagPng.src}
                    width={41}
                    height={59}
                    alt="Indian Flag"
                    className={styles.flagIcon}
                  />
                  <Typography variant="body2" className={styles.badgeText}>
                    Made in India
                  </Typography>
                </Card>

                <h1 className={styles.heading}>
                  The{" "}
                  <span className={styles.gradientText}>
                    Future of Smart Living
                  </span>{" "}
                  Starts Here
                </h1>

                <Typography variant="h6" className={styles.subheading}>
                  Level Up Your Life with AI-Powered Finance, Fitness & Fashion.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    className={styles.getStartedButton}
                  >
                    Get Started
                  </Button>

                  <Stack direction="row" spacing={2}>
                    <Button className={styles.appButton}>
                      <img
                        src={PlayStoreSvg.src}
                        width={140}
                        height={42}
                        alt="Get it on Google Play"
                      />
                    </Button>
                    <Button className={styles.appButton}>
                      <img
                        src={AppStoreSvg.src}
                        width={140}
                        height={42}
                        alt="Download on the App Store"
                      />
                    </Button>
                  </Stack>
                </Stack>
              </Box>

              {/* Phone mockup */}
              <Box className={styles.phoneWrapper}>
                <img
                  src={HeroImagePng.src}
                  alt="Hero App Screenshot"
                  className={styles.phoneMockup}
                />

                {/* Floating images replacing divs */}
                <img
                  src={AbstractTopPng.src}
                  alt="Abstract Shape Top"
                  className={styles.floatingObjectTop}
                />
                <img
                  src={AbstractRightPng.src}
                  alt="Abstract Shape Right"
                  className={styles.floatingObjectRight}
                />
                <img
                  src={AbstractBottomPng.src}
                  alt="Abstract Shape Bottom"
                  className={styles.floatingObjectBottom}
                />
              </Box>
            </Stack>
          </Container>
        </Box>
      )}
    </div>
  );
};

export default HeroSection;
