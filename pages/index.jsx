import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Default";
import TypingEffect from "../components/TypingEffect";

import developpementPic from '../public/assets/img/james-harrison-vpOeXr5wmR4-unsplash.jpg';
import mentoratPic from '../public/assets/img/john-schnobrich-FlPc9_VocJ4-unsplash.jpg';

const words = ["Développeur Full-Stack", "Leader", "Coaching", "Mentorat"];

const bulletPoints = [
  {
    title: "Développement",
    content:
      "Dans le développement web depuis plusieurs années, je me rappel des premiers sites que j'ai conçu lorsque j'étais encore au secondaire, avant les années 2000 🤪 ",
    image: developpementPic,
    caption:  {
      name: "James Harrison",
      href: "https://unsplash.com/@jstrippa",
    },
  },
  {
    title: "Mentorat, Coaching",
    content:
      "Depuis quelques années, je me suis découvert une passion pour le coaching et le mentorat auprès des jeunes. Cette passion m'aide dans ma vie professionnelle à avoir un impact positif au sein de mon awesome team.",
    image: mentoratPic,
    caption: {
      name: "John Schnobrich",
      href: "https://unsplash.com/@johnschno",
    },
  }
];

export default function Index() {
  return (
    <Layout>
      <Head>
      <title>JF Paris</title>
        <meta property="og:title" content="JF Paris"></meta>
        <meta name="twitter:title" content="JF Paris"></meta>

        <meta property="og:image" content="https://blog.jfparis.ca/assets/img/james-harrison-vpOeXr5wmR4-unsplash.jpg"></meta>
        <meta property="og:image:width" content="1500"></meta>
        <meta property="og:image:height" content="500"></meta>

        <meta name="description" content="Avec plus de 20 ans d'expériences, je me passionne toujours pour les technologies de développement web."></meta>
        <meta property="og:description" content="Avec plus de 20 ans d'expériences, je me passionne toujours pour les technologies de développement web."></meta>
        <meta name="twitter:description" content="Avec plus de 20 ans d'expériences, je me passionne toujours pour les technologies de développement web."></meta>
        <meta name="keywords" content="Développeur, Développement web, Blogue, PHP, Mentorat, Développeur Full-Stack, Leader, Leadership, Carrière"></meta>

        <meta property="og:url" content="https://blog.jfparis.ca/blogue/"></meta>
        <link rel="canonical" href="https://blog.jfparis.ca/blogue/"></link>
      </Head>
      <div className="text-center py-20 mb-20 border-b border-gray-200">
        <div>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Jean-François Paris</span> <br />
            <span className="block text-red-500 xl:inline">
              <TypingEffect words={words} />
              &nbsp;
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Avec plus de 20 ans d&apos;expériences, je me passionne toujours pour les
            technologies de développement web.
          </p>
        </div>
      </div>

      <div className="flex flex-col border-b border-gray-200">
        {bulletPoints.map((item, key) => (
          <div
            className={classNames(
              "flex flex-col-reverse justify-center mx-5 md:mx-10 mb-10",
              key % 2 ? "md:flex-row-reverse" : "md:flex-row"
            )}
            key={key}
          >
            <div className="lg:w-1/3 mx-10">
              <h2 className="text-2xl text-red-500 mb-3">{item.title}</h2>
              <p className="text-gray-500">{item.content}</p>
            </div>
            <div className="lg:w-1/3 mx-10 mb-5">
              <Image
                src={item.image}
                className="rounded shadow-md shadow-gray-500"
                alt=""
              ></Image>
              <div className="text-center mb-5 mt-3 text-gray-500 text-xs">
                Photo de <a href={item.caption.href}>{item.caption.name}</a> sur <a href="https://unsplash.com">Unsplash</a>.
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
