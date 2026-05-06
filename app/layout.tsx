import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShiftSmart – Restaurant Staff Scheduling Optimizer",
  description: "Optimize restaurant shifts based on sales patterns. Analyze POS data to predict optimal staffing levels and auto-generate schedules."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="475dd909-19b8-4a4a-b15a-09f27f19b657"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
