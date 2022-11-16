import { ExternalLinkIcon, LinkIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Default";
import profilePic from "../public/assets/img/avatar.jpeg";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>À propos | JF Paris</title>
      </Head>
      <div className="max-w-7xl my-10 pb-3 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">À propos de moi</h1>
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="mb-3 md:w-1/2 md:pr-5">
          <h2 className="text-gray-800 font-bold text-xl my-5">
            Développeur, Leader, Freelance
          </h2>
          <p className="mb-3">
            Depuis plus de 20 ans dans le développement web, j&apos;ai eu la
            chance et la malchance 😜 de travailler / jouer avec plein
            d&apos;outils et de technologie. Les technologies ont tellement
            évolué que l&apos;on doit rester à l&apos;affût de tout ce qui se
            fait dans ce secteur d&apos;activité. J&apos;ai participé à
            plusieurs projets d&apos;envergures au sein d&apos;entreprise ainsi
            qu&apos;en freelance.
          </p>

          <h2 className="text-gray-800 font-bold text-xl my-5">Mentorat</h2>
          <p className="mb-3">
            Depuis quelques années, je suis mentor sur la plateforme{" "}
            <a href="https://academos.qc.ca" target="_blank" rel="noreferrer">
              <ExternalLinkIcon className="inline w-4 h-4 relative -top-0.5" />
              Academos
            </a>
            . Cette plateforme aide les jeunes à entrer en contact avec des
            travailleurs de tous les secteurs.
          </p>

          <h2 className="text-gray-800 font-bold text-xl my-5">Papa</h2>
          <p className="mb-3">
            Ma conjointe ❤️ Véronique ❤️ avec qui je partage ma vie depuis plus
            de 10 ans m'a offert le privilège de devenir père, pas 1, pas 2 mais
            bien 3 fois. Chaque jour qui passe, je me bât pour être un meilleur
            amoureux, un meilleur père, une meilleure personne. Pour moi,
            c&apos;est primordial de prioriser ma famille avant tout.
          </p>
          <p className="mb-3">
            Pour me contacter
            <br />
            <i className="fa fa-envelope fa-fw"></i>{" "}
            <a href="mailto:jfparis84@gmail.com">jfparis84@gmail.com</a>
            <br />
            <i className="fa-brands fa-linkedin-in fa-fw"></i>{" "}
            <a href="https://www.linkedin.com/in/jean-francois-paris">
              linkedin.com/in/jean-francois-paris
            </a>
          </p>
        </div>
        <div className="mb-5 md:w-1/2 md:pl-5">
          <Image
            src={profilePic}
            className="rounded-full"
            alt="Jean-François Paris"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
