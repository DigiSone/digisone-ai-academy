import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Academy by DigiSone — 0 to Hero in 2026",
  description: "Free, project-driven AI engineering curriculum. Learn Python, ML, Transformers, LLM Engineering, Agents, and MLOps from scratch."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}