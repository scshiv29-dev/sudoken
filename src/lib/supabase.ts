import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://flbcqbxfnsgzhsvhbhvv.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: "next_auth" },
});

export async function getUserGames(userid:string) {
  const { data, error } = await supabase
    .from("users")
    .select("user_games")
    .eq("id", userid);
    return data
}

export async function getUser(userId:string){
  console.log(userId)
  const {data,error}=await supabase
  .from("users")
  .select()
  .eq("id",userId);
  
  if(data){
    return data
  }
  else{
    return "User Not Public"
  }
}