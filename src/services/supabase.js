import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jmdscupdcnnmoymojkxp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZHNjdXBkY25ubW95bW9qa3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMzEyODYsImV4cCI6MjAyMjcwNzI4Nn0.RteDyQkXOUXa3MqfAx2KxOxuyZak0W8c69_ULYHvGjM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
