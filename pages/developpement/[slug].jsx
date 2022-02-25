import Layout from "../../components/Layout/Default";

const BlogPost = (props) => {
  if (!props.blogpost) {
    return <div>not found</div>;
  }

  const { attributes, html } = props.blogpost.default;

  return (
    <Layout>
      <div className="max-w-7xl my-10 pb-3 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">Développement</h1>
      </div>

      <div className="post-container max-w-4xl mx-auto">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-gray-500 mb-3">
            {attributes.title}
          </h2>
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
            {new Date(attributes.date).toLocaleDateString("fr-ca", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        <div className="mb-5">
          <img
            src={attributes.image}
            className=" rounded-md shadow-md shadow-gray-500"
          />
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
  const blogpost = await import(`../../posts/developpement/${slug}.md`).catch(
    (error) => null
  );

  return { blogpost };
};

export default BlogPost;
