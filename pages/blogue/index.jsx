import { CalendarIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout/Default";

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context("../../posts", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const Index = ({ postsList }) => {
  return (
    <Layout>
      <Head>
        <title>Blogue | JF Paris</title>
      </Head>
      <div className="max-w-7xl my-10 pb-3 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">Blogue</h1>
      </div>
      <div className="flex flex-row flex-wrap">
        {postsList.map((item, key) => (
          <div
            className={classNames("w-full mb-5 lg:w-1/3 md:w-1/2")}
            key={key}
          >
            <div className="border border-gray-200 p-2 mr-2">
              <Link href={"/blogue/" + item.slug}>
                <a className="group block hover:text-red-400 transition">
                  <h1 className="text-3xl font-bold text-gray-500 mb-3 hover:text-red-400 ">
                    {item.attributes.title}
                  </h1>
                </a>
              </Link>
              <div className="mb-3">
                {item.attributes.categories.map((item, key) => (
                  <span
                    className="text-xs rounded px-3 py-1 bg-slate-600 text-white mr-1"
                    key={key}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="text-sm">
                <CalendarIcon className="inline-flex h-3.5 w-3.5 -top-0.5 relative" />{" "}
                {new Date(item.attributes.date).toLocaleDateString("fr-ca", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <img src={item.attributes.image} className="mt-3" />
              <p className="mt-3">
                {item.attributes.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const postsList = await importBlogPosts();

  // sort post listing.
  postsList.sort((a, b) => {
    if (a.attributes.date < b.attributes.date) {
      return 1;
    } else if (a.attributes.date > b.attributes.date) {
      return -1;
    }
    return 0;
  });

  // get unique categrories.
  let categroriesList = [];
  postsList.forEach((item) => {
    categroriesList = categroriesList.concat(item.attributes.categories);
  });
  categroriesList = [...new Set(categroriesList)];
  categroriesList.sort((a, b) => {
    return a.localeCompare(b);
  });

  return { postsList, categroriesList };
};

export default Index;
