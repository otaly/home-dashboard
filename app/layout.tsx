import './globals.css';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({ weight: ['400'], subsets: ['latin'] });

export const metadata = {
  title: 'Home Dashboard',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}