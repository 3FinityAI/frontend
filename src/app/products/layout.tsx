"use client";
import { Suspense } from "react";
import React from "react";
import { usePathname } from 'next/navigation'
import AppHeaderBar from "../components/website/header";
import Footer from "../components/website/footer";
import Sidebar from "../components/common/Sidebar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (

    <div style={{backgroundColor: "#010612"}}>
      {pathname == "/products" ? <><AppHeaderBar />
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
        <Footer /></>
        :
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar>
              {children}
            </Sidebar>
          </Suspense>
        </>
      }

    </div>
  );
}

