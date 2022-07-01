import { CalendarIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout/Default";

const BlogPost = (props) => {
  if (!props.blogpost) {
    return <div>not found</div>;
  }

  const { attributes, html } = props.blogpost.default;

  return (
    <Layout>
      <Head>
        <title>{attributes.title} | JF Paris</title>
      </Head>
      <div className="max-w-7xl my-10 pb-3 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">Blogue</h1>
        <Link href="/blogue">
          <a><i className="fa fa-fw fa-arrow-left"></i>Retour</a>
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

BlogPost.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const blogpost = await import(`../../posts/${slug}.md`).catch(
    (error) => null
  );

  return { blogpost };
};

export default BlogPost;
