"use client";
import { Suspense } from "react";
import React from "react";
import AppHeaderBar from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";
import { Container, Grid } from "@mui/material";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{paddingInline: "16px", background: "linear-gradient(to bottom right, #010612, #010612, #082B48)"}}>
      <AppHeaderBar />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <Footer />
    </div>
  );
}
