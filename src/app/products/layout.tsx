// app/products/layout.tsx
import { ReactNode } from "react";
import { headers } from "next/headers";
import DesktopLayout from "./DesktopLayout"
import MobileLayout from "./MobileLayout";
import "../../../public/styles/global.css"

export default function ProductLayout({ children }: { children: ReactNode }) {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);

  return isMobile ? (
    <MobileLayout>{children}</MobileLayout>
  ) : (
    <DesktopLayout>{children}</DesktopLayout>
  );
}