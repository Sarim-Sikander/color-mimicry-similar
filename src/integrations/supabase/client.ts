
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nijngyetadwxfpmstysq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pam5neWV0YWR3eGZwbXN0eXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMTEyMjksImV4cCI6MjA1NTg4NzIyOX0.duxKuTxzChuyO2aJPlSqpJZ7eNi8uXc5aed6Bw3USyY";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
