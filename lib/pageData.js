import { supabase } from './initSupabase';

export const getAllPageViews = async () => {
  const { data: pageViews, error } = await supabase
    .from('page_views')
    .select('page_name');
  return pageViews.reduce((acc, { page_name }) => {
    acc[page_name] ??= 0;
    acc[page_name]++;
    return acc;
  }, {});
};
