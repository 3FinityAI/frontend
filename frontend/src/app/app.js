"use client";
import React, { Suspense } from "react";
import AppHeaderBar from "./components/website/header";
import Footer from "./components/website/footer";
import { useTheme } from "@mui/material/styles";

// Add children to the function parameters
function App({ children }) {
  const theme = useTheme();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render the children passed from layout.tsx */}
        <main>{children}</main>
      </Suspense>
    </>
  );
}

// If you're using TypeScript, you should add proper typing:
// function App({ children }: { children: React.ReactNode }) {

export default App;
