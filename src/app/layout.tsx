import "./globals.css";

export const metadata = {
  title: "Kaewkloaw Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="ocean" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}