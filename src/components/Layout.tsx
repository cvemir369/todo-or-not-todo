import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto p-4">
      <Header />
      <main className="mt-6 p-4 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
