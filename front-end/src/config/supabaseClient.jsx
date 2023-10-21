import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_ANON_KEY

const supabase = createClient(supabaseURL, supabaseKey)

export default supabase