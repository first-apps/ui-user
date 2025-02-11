import type { Metadata } from "next";
import "./globals.css";
import { PageContainer } from "@first-apps/shared/components";

export const metadata: Metadata = {
  title: "User App",
  description: "Stream user role login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageContainer>
          <h1>User App</h1>
          {children}
        </PageContainer>
      </body>
    </html>
  );
}
