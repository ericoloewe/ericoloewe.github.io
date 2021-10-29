import 'normalize.css'
import '../styles/globals.scss'

import Head from 'next/head';
import type { AppProps } from 'next/app'
import { AppProviders } from '../contexts/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Head>
        <link rel="shortcut icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M37P5XS');`,
            }}
          ></script>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M37P5XS"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          <link rel="icon" href="/favicon.ico" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-120218088-1"
          ></script>
        </Head>
      </Head>
      <Component className="page" {...pageProps} />
    </AppProviders>
  )
}

export default MyApp
