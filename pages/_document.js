import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full">
      <Head>
        <meta
          name="description"
          content="Avec plus de 15 ans d'expériences, je me passionne toujours pour les technologies de développement web."
        />
        <link rel="icon" href="/favicon.ico" />
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
