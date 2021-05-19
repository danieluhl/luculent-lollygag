import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../lib/posts";
import Head from "next/head";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

// runs only server side at build time to get all possible paths that will
//  render using this component
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// runs only server side at build time and gets the props needed for
//  one instance of this component
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const dateString = postData.updatedDate ?? postData.date;
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
