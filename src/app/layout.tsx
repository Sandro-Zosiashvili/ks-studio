import type { Metadata } from "next";
import { LanguageProvider } from "@/hooks/useLanguage";
import { BookingProvider } from "@/hooks/useBooking";
import { SITE } from "@/config/site";
import "./globals.scss";

export const metadata: Metadata = {
  title: `${SITE.name} — Fine-Line Tattoo Studio · Tbilisi`,
  description:
    "KS Studio is a fine-line tattoo studio in Saburtalo, Tbilisi, Georgia. Quiet hands, lasting marks. Book a session with our resident artists.",
  keywords: ["tattoo", "Tbilisi", "fine line", "botanical", "blackwork", "KS Studio"],
  openGraph: {
    title: `${SITE.name} — Fine-Line Tattoo Studio`,
    description: "Quiet hands, lasting marks. Saburtalo, Tbilisi, Georgia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Georgian:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <BookingProvider>{children}</BookingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
