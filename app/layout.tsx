import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";

export const metadata: Metadata = {
  title: "נגריית האינטרנט - פתרונות רהיטים מותאמים אישית",
  description: "פתרונות נגרות מותאמים אישית לבית ולעסק. מדפים, ארונות, שולחנות ועוד",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

