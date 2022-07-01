import { ExternalLinkIcon, LinkIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Layout from "../components/Layout/Default";

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
          <p className="mb-3 text-justify">
            <strong>Développeur, Leader, Freelance</strong>
            <br />
            Depuis plus de 15 ans dans le développement web, j'ai eu la chance
            et la malchance 😜 de travailler / jouer avec plein d'outils et de
            technologie. Les technologies ont tellement évoluées que l'on doit
            rester à l'affut de tout ce qui ce fait dans ce secteur d'activité.
            J'ai participé à plusieurs projets d'evergures au sein d'entreprise
            ainsi qu'en freelance.
          </p>

          <p className="mb-3 text-justify">
            <strong>Mentorat</strong>
            <br />
            Depuis quelques années, je suis mentor sur la plateforme{" "}
            <a href="https://academos.qc.ca" target="_blank">
              <ExternalLinkIcon className="inline w-4 h-4 relative -top-0.5" />
              Academos
            </a>
            . Cette plateforme aide les jeunes à entrer en contact avec des
            travailleurs de tous les secteurs.
          </p>

          <p className="mb-3 text-justify">
            <strong>Papa</strong>
            <br />
            Père de 3 beaux enfants, amoureux hors pairs. À chaque jour qui
            passe, je me bât pour être une meilleure personne. Pour moi, c'est
            primordiale de priorisé ma famille avant tout.
          </p>
          <p className="mb-3">
            Pour me contacter
            <br />
            <i className="fa fa-envelope fa-fw"></i> <a href="mailto:jfparis84@gmail.com">jfparis84@gmail.com</a><br />
            <i className="fa-brands fa-linkedin-in fa-fw"></i> <a href="https://www.linkedin.com/in/jean-francois-paris">linkedin.com/in/jean-francois-paris</a>
          </p>
        </div>
        <div className="mb-5 md:w-1/2 md:pl-5">
          <img src="/assets/img/avatar.jpeg" className=" rounded-full"></img>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
