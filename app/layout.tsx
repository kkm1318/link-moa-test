import AuthSession from "../src/components/providers/AuthSession";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
