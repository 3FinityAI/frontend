// app/products/page.tsx (Server Component)
import React from "react";
import { headers } from "next/headers";
import ProductsLandingPage from "../components/products/ProductsLandingPage";
import ProductsLandingPageMweb from "../components/products/ProductsLandingPageMweb";

export default function ProductsPage() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);

  return (
    <>
      {isMobile ? <ProductsLandingPageMweb /> : <ProductsLandingPage />}
    </>
  );
}