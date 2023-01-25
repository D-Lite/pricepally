import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
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
  return <Component {...pageProps} />
}
