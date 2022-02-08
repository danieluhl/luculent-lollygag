import Layout from '../components/layout';
import { getAllPostIds, getPostData } from '../lib/posts';
import Head from 'next/head';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { supabase } from '../lib/initSupabase';
import { useEffect } from 'react';

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
  // on page load, log the page view
  useEffect(() => {
    logPageView();
  }, []);

  const logPageView = async () => {
    let { data: view, error } = await supabase.from('page_views').insert({
      page_name: postData.title
    });
    if(error) {
      console.error(error);
    }
  }

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
