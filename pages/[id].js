import Layout from '../components/layout';
import { getAllPostIds, getPostData } from '../lib/posts';
import Head from 'next/head';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { updatePageViews, updatePageLikes } from '../lib/pageData';
import { useEffect, useState } from 'react';

// runs only server side at build time to get all possible paths that will
//  render using this component, this generates all the routes
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

const emojiButtonStyles = {
  fontSize: '1.4em',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};
const EMOJIS = {
  thumbsUp: '👍',
  heart: '💖',
};

export default function Post({ postData }) {
  const [likeEmoji, setLikeEmoji] = useState(EMOJIS.thumbsUp);
  // on page load, log the page view
  useEffect(() => {
    updatePageViews(postData.id);
    if (window.localStorage.getItem(postData.id)) {
      setLikeEmoji(EMOJIS.heart);
    }
  }, []);

  const onLikeClick = () => {
    if (window.localStorage.getItem(postData.id)) {
      return;
    }
    window.localStorage.setItem(postData.id, 'liked');
    setLikeEmoji(EMOJIS.heart);
    updatePageLikes(postData.id);
  };

  return (
    <Layout>
      {() => (
        <>
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
          <button onClick={onLikeClick} style={emojiButtonStyles}>
            {likeEmoji}
          </button>
        </>
      )}
    </Layout>
  );
}
