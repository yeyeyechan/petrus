import { GlobalStyle } from "../styles/style";
import { Header } from "./header";

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

      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
