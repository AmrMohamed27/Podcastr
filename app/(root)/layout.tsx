import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcastr",
  description: "AI-powered podcast platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <MobileNav />
        <LeftSidebar className={"hidden md:flex"} isOpen={true} />
        {children}
        <RightSidebar />
      </main>
    </div>
  );
}
