import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tjlovmwnzkgphnwpndza.supabase.co';
const supabaseKey = 'sb_publishable_KAlhClFGkBeOQW9nftfKFw_iTWxotJF';

export const supabase = createClient(supabaseUrl, supabaseKey);