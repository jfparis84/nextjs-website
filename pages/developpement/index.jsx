import { CalendarIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Layout from "../../components/Layout/Default";

const blogPosts = [
  {
    title: "title blog",
    content: "jai mon super content icit",
    image: "",
  },
  {
    title: "title blog",
    content: "jai mon super content icit",
    image: "",
  },
  {
    title: "title blog",
    content: "jai mon super content icit",
    image: "",
  },
  {
    title: "title blog",
    content: "jai mon super content icit",
    image: "",
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-3 mb-5 pb-3 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">Développement</h1>
      </div>
      <div className="flex flex-row flex-wrap">
        {blogPosts.map((item, key) => (
          <div
            className={classNames("w-full mb-5", key !== 0 ? "lg:w-1/3" : "")}
            key={key}
          >
            <div className="mx-3 border border-gray-200 px-2 py-2">
              <p className="text-xs text-gray-400 mb-2">
                <CalendarIcon className="inline-flex h-3.5 w-3.5 -top-0.5 relative" />{" "}
                23 fev 2022
              </p>
              <a href="#" className="group block hover:text-red-400 transition">
                <h2 className="text-2xl text-gray-700 group-hover:text-red-400 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-500 group-hover:text-red-400">
                  {item.content}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
