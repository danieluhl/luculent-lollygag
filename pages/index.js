import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import {useCallback, useState} from 'react';

// this runs server side and is for getting the data for this page
export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  const [tag, setTag] = useState('');
  let postsDataFiltered = [...allPostsData];
  const makeTagFilterCallback = (tag) => () => {
    setTag(tag);
  };

  // todo: add clear tags button
  if (tag !== '') {
    postsDataFiltered = allPostsData.filter((item) => {
      return item.tags && item.tags.includes(tag);
    });
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Here you'll find thoughts on JavaScript development, management, stoic
          philosophy as well as some ongoing lists like things I like and habits
          I'm currently making and breaking.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Archives</h2>
        <ul className={utilStyles.list}>
          {postsDataFiltered.map(({id, date, title, tags}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} title={title} />
              </small>
              {tags && (
                <>
                  <br />
                  {tags.map((tag) => (
                    <small key={tag}>
                      <a
                        className={`${utilStyles.tag} ${utilStyles.lightText}`}
                        onClick={makeTagFilterCallback(tag)}
                        data-value={tag}
                      >
                        {tag}
                      </a>
                    </small>
                  ))}
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
