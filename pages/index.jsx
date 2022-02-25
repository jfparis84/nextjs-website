import classNames from "classnames";
import Layout from "../components/Layout/Default";

const bulletPoints = [
  {
    title: "Développement",
    content:
      "Dans le développement web depuis plusieurs années, je me rappel des premiers sites que j'ai conçu lorsque je débutais mon secondaire, avant les années 2000 🤪 ",
    image: "/assets/img/james-harrison-vpOeXr5wmR4-unsplash.jpg",
  },
  {
    title: "Mentorat, Coaching",
    content:
      "Depuis quelques années, je me suis découvert une passion pour le coaching et le mentorat auprès des jeunes. Cette passion m'aide dans ma vie professionnel à avoir un impact positive au sein de mon awesome team.",
    image: "/assets/img/john-schnobrich-FlPc9_VocJ4-unsplash.jpg",
  },
  {
    title: "Famille",
    content:
      "Papa, amant.",
    image: "/assets/img/fe-ngo-bvx3G7RkOts-unsplash.jpg",
  },
];

export default function Index() {
  return (
    <Layout>
      <div className="text-center py-20 mb-20 border-b border-gray-200">
        <div>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Jean-François Paris</span> <br />
            <span className="block text-red-500 xl:inline">
              Développeur Full-Stack
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Avec plus de 15 ans d'expériences, je me passionne toujours pour les
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
