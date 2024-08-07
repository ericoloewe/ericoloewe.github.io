import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Érico de Souza Loewe",
  description: "Érico de Souza Loewe é um brasileiro, amante da música, que atua como desenvolvedor de software na DBC company e é formado Ciência da Computação na Universidade FEEVALE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Érico de Souza Loewe</title>
        <meta name="title" content="Érico de Souza Loewe" />
        <meta name="description" content="Érico de Souza Loewe é um brasileiro, amante da música, que atua como desenvolvedor de software na DBC company e é formado Ciência da Computação na Universidade FEEVALE" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ericoloewe.github.io/" />
        <meta property="og:title" content="Érico de Souza Loewe" />
        <meta property="og:description" content="Érico de Souza Loewe é um brasileiro, amante da música, que atua como desenvolvedor de software na DBC company e é formado Ciência da Computação na Universidade FEEVALE" />
        <meta property="og:image" content="/site.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ericoloewe.github.io/" />
        <meta property="twitter:title" content="Érico de Souza Loewe" />
        <meta property="twitter:description" content="Érico de Souza Loewe é um brasileiro, amante da música, que atua como desenvolvedor de software na DBC company e é formado Ciência da Computação na Universidade FEEVALE" />
        <meta property="twitter:image" content="/site.png" />

        <meta name="author" content="Érico de Souza Loewe" />
        <meta name="description" content="Érico de Souza Loewe é um brasileiro, amante da música, que atua como desenvolvedor de software na DBC company e é formado Ciência da Computação na Universidade FEEVALE" />
        <meta name="keywords" content="Érico,Souza,Loewe,About,Software,Music,Developer" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Script id="gtm" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M37P5XS');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M37P5XS" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
