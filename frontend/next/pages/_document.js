import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html lang="en" className="main-page" >
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
            <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
            <script src="https://www.google.com/recaptcha/api.js"></script>
        </Head>
      <body>
        <Main />
        <NextScript />
        <Script
            src="/js/accordion.js"
            strategy="afterInteractive"
        />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
        <Script
            src="/js/main.js"
            strategy="lazyOnload"
        />
      </body>
    </Html>
  )
}
