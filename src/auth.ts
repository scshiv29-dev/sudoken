import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { getUserGames } from "./lib/supabase"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL as string,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  }),
 
})