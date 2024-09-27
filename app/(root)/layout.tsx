import LeftSidebar from "@/components/nav/LeftSidebar";
import MobileNav from "@/components/nav/MobileNav";
import RightSidebar from "@/components/nav/RightSidebar";
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
      <main className="flex flex-row min-h-screen max-md:py-12">
        <MobileNav />
        <LeftSidebar className={"hidden md:flex"} isOpen={true} />
        {children}
        <RightSidebar />
      </main>
    </div>
  );
}
