"use client";
import { Suspense } from "react";
import React from "react";
import AppHeaderBar from "../components/website/header";
import Footer from "../components/website/footer";
import { Container, Grid } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth={false} sx={{ background: "#010612" }}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <AppHeaderBar />
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            <Footer />
          </Grid>
        </Grid>
    </Container>
  );
}
