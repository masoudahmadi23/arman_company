import Layout from "@/components/layout/Layout";
import "./globals.css";
import { yekan } from "@/utils/fonts";
import ScrollToTop from "@/components/element/ScrollToTop";
import FloatingMenuButton from "@/components/element/FloatingMenuButton";
import { BlogProvider } from "@/context/BlogContext";
import { PortfolioProvider } from "@/context/PortfolioContext";

export const metadata = {
  robots: "index, follow",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <BlogProvider>
          <PortfolioProvider>
            <Layout>
              {children}
              <ScrollToTop />
              <FloatingMenuButton />
            </Layout>
          </PortfolioProvider>
        </BlogProvider>
      </body>
    </html>
  );
}
