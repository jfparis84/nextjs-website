import { CalendarIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout/Default";
import BlogPost from "./[slug]";

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

export const getStaticProps = async () => {
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

  return { props: { postsList, categroriesList } };
};

const Index = ({ postsList }) => {
  return (
    <Layout>
      <Head>
        <title>Blogue | JF Paris</title>
        <meta property="og:title" content="Blogue | JF Paris"></meta>
        <meta name="twitter:title" content="Blogue | JF Paris"></meta>

        <meta property="og:image" content={"https://blog.jfparis.ca" + postsList[0].attributes.image}></meta>
        <meta property="og:image:width" content="1500"></meta>
        <meta property="og:image:height" content="500"></meta>

        <meta name="description" content={postsList[0].attributes.description}></meta>
        <meta property="og:description" content={postsList[0].attributes.description}></meta>
        <meta name="twitter:description" content={postsList[0].attributes.description}></meta>
        <meta name="keywords" content={postsList[0].attributes.keywords}></meta>

        <meta property="og:url" content="https://blog.jfparis.ca/blogue/"></meta>
        <link rel="canonical" href="https://blog.jfparis.ca/blogue/"></link>
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
              <Link href={"/blogue/" + item.slug} className="group block hover:text-red-400 transition">
                <h1 className="text-3xl font-bold text-gray-500 mb-3 hover:text-red-400 ">
                  {item.attributes.title}
                </h1>
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
              <Image src={item.attributes.image} className="mt-3" alt="" width={400} height={300} />
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

export default Index;
