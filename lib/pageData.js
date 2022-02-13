import { supabase } from './initSupabase';

const PAGE_DATA_TABLE_NAME = 'page_data';

export const getAllPageViews = async () => {
  const { data: pageViews, error } = await supabase
    .from(PAGE_DATA_TABLE_NAME)
    .select('*');
  const allPageViewsData = pageViews.reduce((acc, { id, view_count }) => {
    acc[id] = view_count;
    return acc;
  }, {});
  if(error) {
    console.error(`getAllPageViews: ${error}`);
  }
  return allPageViewsData ;
};

const insertPageView = async (pageId) => {
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
  const allPageViews = await getAllPageViews();
  if (!allPageViews[pageId]) {
    await insertPageView(pageId);
  }
  const { data, error } = await supabase.rpc('increment', {
    id: pageId,
  });
  if (error) {
    console.error(`getAllPageViews: ${error}`);
  }
  return data;
};
