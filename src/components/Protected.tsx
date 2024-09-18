import {auth} from "@/auth"
import {redirect} from "next/navigation"
export default async function Protected() {
const session= await auth();

if (!session?.user){

        redirect('/')

}
  return (
    <div></div>
  )
}
