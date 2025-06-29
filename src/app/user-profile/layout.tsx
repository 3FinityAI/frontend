"use client";
import { Suspense } from "react";
import React from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "../components/common/Sidebar";

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div style={{ backgroundColor: "#010612", height: "100vh" }}>
            <Suspense fallback={<div>Loading...</div>}>
                <Sidebar>
                    {children}
                </Sidebar>
            </Suspense>
        </div>

    );
}

