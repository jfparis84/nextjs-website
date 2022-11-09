import Head from "next/head";
import NavBar from "../NavBar";

export default function Layout({ title, children }) {
  return (
      <>
      <Head>
        <title>JF Paris</title>
        <meta name="description" content="Avec plus de 15 ans d'expériences, je me passionne toujours pour les technologies de développement web." />
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>
    <div className="flex flex-col h-screen justify-between">
      <NavBar />

      <main className="mb-auto">
        <div className="max-w-7xl mx-4 sm:mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="text-white text-sm">
            ©2022 par JF Paris.<br />Créer avec{" "}
            <a href="https://nextjs.org/">Nextjs</a> |{" "}
            <a href="https://tailwindcss.com/">TailwindCSS</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
