import LeftSidebar from "@/components/LeftSidebar";
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
        <LeftSidebar />
        {children}
        <RightSidebar />
      </main>
    </div>
  );
}
