import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
        <Script src="assets/js/jquery.min.js" />
        <Script src="assets/js/popper.min.js" />
        <Script src="assets/js/bootstrap.min.js" />
        <Script src="assets/js/multislider.js" />
    </Html>
  )
}
