import { Header } from "@/components/landing/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Xui",
    default: "Xui",
  },
  description: "Xui is a UI library for building web applications",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`
        relative min-h-screen
        transition-colors duration-500 ease-in-out
      `}
    >
      <Header />
      <main className="relative w-full">{children}</main>
      <Footer />
    </div>
  );
}
