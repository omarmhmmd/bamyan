import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Structure from "../layouts/structure/structure";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bamyan</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          charSet="UTF-8"
        />
        <link rel="shortcut icon" href="/images/ico.svg" />
        <meta name="title" content="Bamyan Typeface" />
        <meta
          name="description"
          content="Bamyan is a design project exploring the possibilities of a cultural typeface designed specifically for a region of Afghanistan."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bamyan.omarmhmmd.com/" />
        <meta property="og:title" content="Bamyan Typeface" />
        <meta
          property="og:description"
          content="Bamyan is a design project exploring the possibilities of a cultural typeface designed specifically for a region of Afghanistan."
        />
        <meta property="og:image" content="images/meta_2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bamyan.omarmhmmd.com/" />
        <meta property="twitter:title" content="Bamyan Typeface" />
        <meta
          property="twitter:description"
          content="Bamyan is a design project exploring the possibilities of a cultural typeface designed specifically for a region of Afghanistan."
        />
        <meta property="twitter:image" content="images/meta_2.png" />
      </Head>
      <Structure>
        <Component {...pageProps} />
      </Structure>
    </>
  );
}
