import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full">
      <Head>
        <meta
          name="description"
          content="Avec plus de 20 ans d'expériences, je me passionne toujours pour les technologies de développement web."
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="fr_ca"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="JF Paris"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>

        <meta name="robots" content="index, follow"></meta>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
