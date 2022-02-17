import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { useState, useEffect } from 'react';
import { getPageExtraData } from '../lib/pageData';

// this runs server side and is for getting the data for this page
export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const TABS = {
  LATEST: 'Latest',
  VIEWS: 'Views',
  LIKES: 'Likes',
};

const SORT = {
  [TABS.VIEWS](a, b) {
    return b.views - a.views;
  },
  [TABS.LIKES](a, b) {
    return b.likes - a.likes;
  },
  [TABS.LATEST](a, b) {
    const compareDateA = a.updatedDate ?? a.date;
    const compareDateB = b.updatedDate ?? b.date;
    return compareDateA < compareDateB ? 1 : -1;
  },
};

export default function Home({ allPostsData }) {
  const [selectedTag, setSelectedTag] = useState('');
  const [allPostsSorted, setAllPostsSorted] = useState([]);
  const [activeTab, setActiveTab] = useState(TABS.LATEST);

  let postsDataFiltered = [...allPostsData];

  const makeTagFilterCallback = (tag) => () => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };

  if (selectedTag !== '') {
    postsDataFiltered = allPostsData.filter((item) => {
      return item.tags && item.tags.includes(selectedTag);
    });
  }

  useEffect(async () => {
    const allPageViewsData = await getPageExtraData();
    postsDataFiltered.forEach((post) => {
      let views = 0;
      let likes = 0;
      if (allPageViewsData[post.id]) {
        views = allPageViewsData[post.id].views;
        likes = allPageViewsData[post.id].likes;
      }
      post.views = views;
      post.likes = likes;
    });

    setAllPostsSorted(postsDataFiltered);
  }, []);

  const onHeadingClick = (activeTab) => () => {
    setActiveTab(activeTab);
    setAllPostsSorted(postsDataFiltered.sort(SORT[activeTab]));
  };

  return (
    <Layout home>
      {({ theme }) => (
        <>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
            <p>
              Here you'll find thoughts on JavaScript development, management,
              stoic philosophy as well as some ongoing lists like things I like
              and habits I'm currently making and breaking.
            </p>
            <p>
              I also co-host <a target="_blank" href="https://anchor.fm/lollygag">a podcast</a>{' '}
              with the great Raphael Rafatpanah about all things programming.
            </p>
          </section>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <div className={utilStyles.headings}>
              {Object.values(TABS).map((tab) => (
                <h2
                  key={tab}
                  className={`${utilStyles.headingLg} ${theme.tabHeading} ${
                    activeTab === tab ? theme.activeTabHeading : ''
                  }`}
                  onClick={onHeadingClick(tab)}
                >
                  {tab}
                </h2>
              ))}
            </div>
            <ul className={utilStyles.list}>
              {allPostsSorted.map(({ id, date, title, tags, views, likes }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} title={title} />
                    {views > 5 && (
                      <>
                        <small className={utilStyles.greyLightText}>👀</small>
                        {views}
                      </>
                    )}
                    {likes > 5 && (
                      <>
                        <small className={utilStyles.greyLightText}>👍</small>
                        {likes}
                      </>
                    )}
                  </small>
                  {tags && (
                    <>
                      <br />
                      {tags.map((tag) => (
                        <small key={tag}>
                          <a
                            className={`${
                              tag === selectedTag ? utilStyles.selectedTag : ''
                            } ${utilStyles.tag} ${utilStyles.lightText}`}
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
        </>
      )}
    </Layout>
  );
}
