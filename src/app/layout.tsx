import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Portfolio Gallery",
  description: "My portfolio gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav () {
  return (
    <nav className="flex w-full intems-center justify-between border-b p-4 text-xl font-semibold">
        <div className="text-2xl font-bold">Galerry</div>
        <div>Sign In</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav />
        {children}</body>
    </html>
  );
}
