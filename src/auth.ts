import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import authConfig from "./auth.config"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: SupabaseAdapter({
    url:"https://flbcqbxfnsgzhsvhbhvv.supabase.co",
    secret: process.env.NEXT_PUBLIC_ANON_KEY as string,
  }),
  ...authConfig,
})