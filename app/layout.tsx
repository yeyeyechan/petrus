import { GlobalStyle } from "../styles/style";

export const metadata = {
  title: "coinview",
  description: "monitoring coin market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />

      <body>{children}</body>
    </html>
  );
}
