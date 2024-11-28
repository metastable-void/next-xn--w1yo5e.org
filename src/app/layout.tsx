import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TabBar from "./components/TabBar";

import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "真空.org",
  description: "Personal showcase for 真空",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TabBar tabs={[
          { text: "mori.yuka.org", linkUrl: "https://www.mori.yuka.org/" },
          { text: "真空.org", linkUrl: "https://xn--w1yo5e.org/", selected: true },
        ]} />
        {children}
        <footer id="footer">
          <p lang="ja">🌕︎🌓︎してメンへらごっこしてお薬調べて遊んでた昔が懐かしい——あの頃は苦しかったけど楽しかった。全てはもうあたまが自由に働かなくなった精神の夜に溶けてしまうだろうから、わすれないでいようね。</p>
          <p>© 2024 真空 / License: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA-4.0</a> or <a href="https://www.gnu.org/licenses/">GNU GPL version 3 or later</a>.</p>
        </footer>
      </body>
    </html>
  );
}
