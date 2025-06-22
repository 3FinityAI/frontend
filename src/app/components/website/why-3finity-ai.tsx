"use client";

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import styles from "./why-3finity-ai.module.scss";

const Why3finityAi = () => {
  const features = [
    {
      image: "/images/all-in-one-solution.png",
      title: "All-in-One Solution",
      description: "Manage your fitness, investments, and style in one places",
    },
    {
      image: "/images/ai-that-understands-you.png",
      title: "AI That Understands You",
      description: "Smart insights tailored to your needs.",
    },
    {
      image: "/images/stay-ahead-with-ai.png",
      title: "Stay Ahead with AI",
      description: "Get the latest trends, strategies, and plans",
    },
  ];

  return (
    <Box className={styles.whySection}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" className={styles.sectionTitle}>
          Why Choose 3finityAi??
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          className={styles.sectionSubtitle}
        >
          designed to be effortless for everyone
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box className={styles.featureContainer}>
                <Box className={styles.iconContainer}>
                  <img
                    src={feature.image}
                    width={72}
                    height={72}
                    alt={feature.title}
                    className={styles.featureIcon}
                  />
                </Box>
                <Typography
                  variant="h4"
                  component="h3"
                  className={styles.featureTitle}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Why3finityAi;
