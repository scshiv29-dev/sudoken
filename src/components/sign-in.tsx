"use server"

import { signIn } from "@/auth"
 
export async function SignIn() {
  return (
    <form
      action={async () => {
        await signIn("github")
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 