"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  useTheme,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const GuideNext = () => {
  const theme = useTheme();

  const categories = [
    {
      title: "Finance",
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: "#3f8cff" }} />,
      description:
        "Set financial goals, and let AI guide you to the right investments for retirement, wealth growth, or tax-saving strategies.",
    },
    {
      title: "Fitness",
      icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "#3f8cff" }} />,
      description:
        "Achieve your health goals with AI-generated diet and workout plans tailored to your body type and lifestyle.",
    },
    {
      title: "Fashion",
      icon: <CheckroomIcon sx={{ fontSize: 40, color: "#3f8cff" }} />,
      description:
        "Stay ahead of trends with AI-powered style recommendations and visuals that suit your personality and occasion.",
    },
  ];

  return (
    <Box
      sx={{
        color: "white",
        py: 8,
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            backgroundImage:
              "radial-gradient(50% 50% at 50% 50%, #4095D9 0%, #004882 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "#4095D9", // Fallback color for browsers that don't support gradients
            mb: 2,
            fontWeight: 500,
          }}
        >
          3finityAI has you covered!
        </Typography>

        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Let AI guide your next
          <br />
          <Box component="span" sx={{ fontWeight: "bold" }}>
            BIG MOVE
          </Box>
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 8,
            maxWidth: "800px",
            mx: "auto",
            color: "#cccccc",
          }}
        >
          Why settle for guesswork when AI can guide your next big move? Whether
          it's stacking wealth, getting fit, or upgrading your style, 3finityAI
          has got your back.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {categories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  bgcolor: "#0f1120",
                  color: "white",
                  height: "100%",
                  borderRadius: "40px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      bgcolor: "#161831",
                      borderRadius: 2,
                      mb: 3,
                    }}
                  >
                    {category.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: "#aaaaaa",
                    }}
                  >
                    {category.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ px: 4, pb: 3 }}>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      textTransform: "none",
                      color: "white",
                      "&:hover": {
                        background: "transparent",
                        color: "#3f8cff",
                      },
                    }}
                  >
                    Explore More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 3,
              fontWeight: 500,
            }}
          >
            Ready to 3X Your Life?
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "#0a0a16",
              px: 4,
              py: 1.5,
              borderRadius: 100,
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#f0f0f0",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GuideNext;
