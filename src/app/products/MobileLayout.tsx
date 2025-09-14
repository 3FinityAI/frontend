"use client";
import { Suspense } from "react";
import React from "react";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div style={{ backgroundColor: "#010612" }}>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
}
