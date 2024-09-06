import { auth } from "../auth"
import Image from "next/image"
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
    <div>
      <Image src={session?.user?.image as string} width={50} height={50} alt="User Avatar" />
    </div>
  )
}