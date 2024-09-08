"use server"

import { signOut} from "@/auth"
 
export async function SignOut() {
  return (
    <form
      action={async () => {
        await signOut()
      }}
    >
      <button type="submit">SignOut</button>
    </form>
  )
} 