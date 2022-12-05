import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Structure from "../layouts/structure/structure";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bamyan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" charSet="UTF-8" />
        <meta property="og:title" content="Bamyan" />
        <meta property="og:description" content="A typeface" />
        <meta property="og:image" content="images/meta.png" />
        <link rel="shortcut icon" href="/iso.svg" />
      </Head>
      <Structure>
        <Component {...pageProps} />
      </Structure>
    </>
  );
}
