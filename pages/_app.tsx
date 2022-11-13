import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Bamyan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Bamyan" />
        <meta property="og:description" content="A typeface" />
        <meta property="og:image" content="images/meta.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
