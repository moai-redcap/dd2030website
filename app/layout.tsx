import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Box } from "@chakra-ui/react";
import "./global.css";
import "./content.css";
import { Provider } from "@/components/ui/provider";
import { BIZ_UDGothic } from "next/font/google";

export const biz_udGothic400 = BIZ_UDGothic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-biz-udgothic400",
  display: "swap",
});

export const biz_udGothic700 = BIZ_UDGothic({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-biz-udgothic700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "デジタル民主主義2030",
  description: "デジタル民主主義2030プロジェクトポータルサイト",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${biz_udGothic400.className}`}
      suppressHydrationWarning
    >
      <body>
        <Provider>
          <Box className={"container"}>
            <Box mx={"auto"} maxW={"1000px"}>
              <Header />
              {children}
            </Box>
          </Box>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
