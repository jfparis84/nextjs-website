import { CalendarIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout/Default";
import hljs from "highlight.js";
import { useEffect } from "react";

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

export const getStaticPaths = async () => {
  const postsList = await importBlogPosts();

  //console.log(postsList);
  const paths = postsList.map((post) => ({
    params: { slug: post.slug },
  }));
  //console.log(paths);

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (props) => {
  const slug = props.params.slug;
  const blogpost = await import(`../../posts/${slug}.md`).catch(
    (error) => null
  );

  return { props: { blogpost: {slug: slug, ...blogpost} } };
};

const BlogPost = (props) => {
  useEffect(() => {
    hljs.highlightAll();
  });
  
  if (!props.blogpost) {
    return <div>not found</div>;
  }

  const { slug } = props.blogpost;
  const { attributes, html } = props.blogpost.default;

  return (
    <Layout>
      <Head>
        <title>{attributes.title} | JF Paris</title>
        <meta property="og:title" content={attributes.title + " | JF Paris"}></meta>
        <meta name="twitter:title" content={attributes.title + " | JF Paris"}></meta>

        <meta property="og:image" content={"https://blog.jfparis.ca" + attributes.image}></meta>
        <meta property="og:image:width" content="1500"></meta>
        <meta property="og:image:height" content="1000"></meta>

        <meta name="description" content={attributes.description}></meta>
        <meta property="og:description" content={attributes.description}></meta>
        <meta name="twitter:description" content={attributes.description}></meta>
        <meta name="keywords" content={attributes.keywords}></meta>

        <meta property="og:url" content={"https://blog.jfparis.ca/" + slug + "/"}></meta>
        <link rel="canonical" href={"https://blog.jfparis.ca/" + slug + "/"}></link>
      </Head>
      <div className="max-w-7xl my-10 pb-3 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">Blogue</h1>
        <Link href="/blogue">
          <i className="fa fa-fw fa-arrow-left"></i>Retour
        </Link>
      </div>

      <div className="post-container max-w-4xl mx-auto">
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-gray-500 mb-3">
            {attributes.title}
          </h1>
          <div className="mb-3">
            {attributes.categories.map((item, key) => (
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
            {new Date(attributes.date).toLocaleDateString("fr-ca", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;
