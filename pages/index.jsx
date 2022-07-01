import classNames from "classnames";
import Layout from "../components/Layout/Default";
import TypingEffect from "../components/TypingEffect";

const words = ["Développeur Full-Stack", "Leader", "Coaching", "Mentorat"];

const bulletPoints = [
  {
    title: "Développement",
    content:
      "Dans le développement web depuis plusieurs années, je me rappel des premiers sites que j'ai conçu lorsque j'étais encore au secondaire, avant les années 2000 🤪 ",
    image: "/assets/img/james-harrison-vpOeXr5wmR4-unsplash.jpg",
    caption:  {
      name: "James Harrison",
      href: "https://unsplash.com/@jstrippa",
    },
  },
  {
    title: "Mentorat, Coaching",
    content:
      "Depuis quelques années, je me suis découvert une passion pour le coaching et le mentorat auprès des jeunes. Cette passion m'aide dans ma vie professionnel à avoir un impact positive au sein de mon awesome team.",
    image: "/assets/img/john-schnobrich-FlPc9_VocJ4-unsplash.jpg",
    caption: {
      name: "John Schnobrich",
      href: "https://unsplash.com/@johnschno",
    },
  }
];

export default function Index() {
  return (
    <Layout>
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
              <div class="text-center mb-5 mt-3 text-gray-500 text-xs">
                Photo de <a href={item.caption.href}>{item.caption.name}</a> sur <a href="https://unsplash.com">Unsplash</a>.
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
