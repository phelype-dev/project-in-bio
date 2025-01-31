import "./globals.css";
import {Red_Hat_Display} from 'next/font/google'

const reHatDisplay =  Red_Hat_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${reHatDisplay.className} bg-background-primary text-content-body`}>{children}
      </body>
    </html>
  );
}
