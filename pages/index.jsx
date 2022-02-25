import classNames from "classnames";
import Head from "next/head";
import Layout from "../components/Layout/Default";

const bulletPoints = [
  {
    title: "title 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate id est eget efficitur. Pellentesque nec blandit est. Nam mauris nisi, pharetra quis tincidunt blandit, ullamcorper non urna. Vivamus faucibus est massa, et porttitor nibh elementum in. Curabitur finibus massa tristique nulla maximus, vel ornare enim pulvinar.",
    image: "/assets/img/james-harrison-vpOeXr5wmR4-unsplash.jpg",
  },
  {
    title: "title 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate id est eget efficitur. Pellentesque nec blandit est. Nam mauris nisi, pharetra quis tincidunt blandit, ullamcorper non urna. Vivamus faucibus est massa, et porttitor nibh elementum in. Curabitur finibus massa tristique nulla maximus, vel ornare enim pulvinar.",
    image: "/assets/img/yancy-min-842ofHC6MaI-unsplash.jpg",
  },
];

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Mon super blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center py-20 mb-20 border-b border-gray-200">
        <div>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Jean-François Paris</span> <br />
            <span className="block text-red-500 xl:inline">
              Développeur Full-Stack
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Avec plus de 15 ans d'expériences, je me passionne toujours dans les
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
              <img
                src={item.image}
                className="rounded shadow-md shadow-gray-500"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
