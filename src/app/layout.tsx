"use client"
import React, { useState, useEffect } from "react";
import MyApp from "./app";
import "../../public/styles/global.css";
import { AddFundContextProvider } from "@/app/contexts/AddFundContext";

// export const metadata = {
//   title: "3finityai",
//   description: "The Future of Smart Living",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fundList, setFundList] = useState([]);

  const addFund = (fund: any) => {
    console.log(fund, "add is called");
    setFundList((prev) => [{id: Date.now(), ...fund }, ...prev]);
  };

  const updateFund = (id: any, fund: any) => {
    setFundList((prev) =>
      prev.map((prevFund) => (prevFund.id === id ? fund : prevFund))
    );
  };

  const deleteFund = (id: any) => {
    setFundList((prev) => prev.filter((fund) => fund.id !== id));
  };

  useEffect(() => {
    try {
      const storedFundList = JSON.parse(localStorage.getItem("fundList"));
      if (Array.isArray(storedFundList) && storedFundList.length > 0) {
        setFundList(storedFundList);
      }
    } catch (error) {
      console.error("Error parsing fundList from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fundList", JSON.stringify(fundList));
    console.log(fundList, "fundlist");
  }, [fundList]);

  return (
    <html lang="en">
      <head>
        {/* Font Family */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="author" content="3finityai" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <AddFundContextProvider
          value={{ fundList, addFund, updateFund, deleteFund }}
        >
          <MyApp>{children}</MyApp>
        </AddFundContextProvider>
      </body>
    </html>
  );
}
