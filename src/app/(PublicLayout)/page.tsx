"use client";
import React, {useState} from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import HeroSection from "../components/website/hero-section";
import GuideNext from "../components/website/guide-next";
import Why3finityAi from "../components/website/why-3finity-ai";
import GetStarted from "../components/website/get-started";

const LandingPage = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12}>
          <HeroSection />
          <GuideNext />
          <Why3finityAi />
          <GetStarted />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
