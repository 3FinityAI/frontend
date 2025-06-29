"use client";
import { Suspense } from "react";
import React from "react";
import Sidebar from "../components/common/Sidebar";

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div style={{ backgroundColor: "#010612" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar>{children}</Sidebar>
      </Suspense>
    </div>
  );
}
