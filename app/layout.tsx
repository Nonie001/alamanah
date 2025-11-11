import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin", "thai"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "มูลนิธิอัลอามานะห์ เพื่อการศึกษาและสังคม",
  description: "มูลนิธิอัลอามานะห์ เพื่อการศึกษาและสังคม จังหวัดสุราษฎร์ธานี - รับบริจาคเพื่อสนับสนุนการศึกษาและพัฒนาสังคม",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${prompt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
