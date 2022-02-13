import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const PAGE_DATA_TABLE_NAME = 'page_data';

export const getPageExtraData = async () => {
  const { data: pageViews, error } = await supabase
    .from(PAGE_DATA_TABLE_NAME)
    .select('*');
  const allPageViewsData = pageViews.reduce(
    (acc, { id, view_count, like_count }) => {
      acc[id] = { views: view_count, likes: like_count };
      return acc;
    },
    {}
  );
  if (error) {
    console.error(`getAllPageViews: ${error}`);
  }
  return allPageViewsData;
};

const insertPageRecord = async (pageId) => {
  const { data, error } = await supabase
    .from(PAGE_DATA_TABLE_NAME)
    .insert([{ id: pageId, view_count: 0, like_count: 0 }]);
  if (error) {
    console.error(`getAllPageViews: ${error}`);
  }
  return data;
};

export const updatePageViews = async (pageId) => {
  // if it's not already there, insert
  const allPageViews = await getPageExtraData();
  if (!allPageViews[pageId]) {
    await insertPageRecord(pageId);
  }
  console.log(`incrementing ${pageId}`);
  const { data, error } = await supabase.rpc('incrementviews', {
    page_id: pageId,
  });
  if (error) {
    console.error(`getAllPageViews: ${error}`);
  }
  return data;
};

export const updatePageLikes = async (pageId) => {
  // if it's not already there, insert
  const allPageViews = await getPageExtraData();
  if (!allPageViews[pageId]) {
    await insertPageRecord(pageId);
  }
  console.log(`incrementing ${pageId}`);
  const { data, error } = await supabase.rpc('incrementlikes', {
    page_id: pageId,
  });
  if (error) {
    console.error(`getAllPageViews: ${error}`);
  }
  return data;
};
