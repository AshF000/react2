import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vrrmjuhexxdkqkgvliau.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycm1qdWhleHhka3FrZ3ZsaWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NTgwMDMsImV4cCI6MjA3MjEzNDAwM30.cpvxgUvwnNstwNy-Vgu1zf3l1zG98sL3DcYZ1fGavD4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
