import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect } from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import '@fontsource/roboto';

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])
  return (
  <>
    <Head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}
