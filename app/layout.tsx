import type { Metadata } from "next";
import { Fraunces, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/provider";
import { company } from "@/lib/company";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Osmani Technologies — Software, commerce, and capital from Nigeria.",
    template: "%s · Osmani Technologies",
  },
  description: company.description,
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: company.url,
    siteName: "Osmani Technologies",
    title: "Osmani Technologies",
    description:
      "Software, commerce, and capital — built in Ibadan, for the world.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osmani Technologies",
    description:
      "Software, commerce, and capital — built in Ibadan, for the world.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.shortName,
  url: company.url,
  logo: `${company.url}/favicon.svg`,
  email: company.email.primary,
  foundingDate: company.incorporated,
  description: company.description,
  identifier: [
    { "@type": "PropertyValue", propertyID: "RC", value: company.rcNumber },
    { "@type": "PropertyValue", propertyID: "TIN", value: company.tin },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.registeredAddress.line1}, ${company.registeredAddress.line2}`,
    addressLocality: company.registeredAddress.locality,
    addressRegion: company.registeredAddress.region,
    addressCountry: company.registeredAddress.countryCode,
  },
  brand: [{ "@type": "Brand", name: company.flagship }],
  sameAs: [company.cacVerifyUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
