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
  return <main>{children}</main>;
}
