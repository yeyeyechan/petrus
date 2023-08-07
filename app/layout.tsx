import { GlobalStyle } from "../styles/style";
import { Header } from "./header";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <GlobalStyle />
      </head>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
