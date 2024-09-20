import UserAvatar from "./UserAvatar";
import { auth } from "../auth";
import { SignIn } from "./sign-in";
import { SignOut } from "./sign-out";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
export default async function Navbar() {
  const session = await auth();
  if (session) {
  }
  const LoginLogout = async () => {
    if (!session?.user) {
      return <SignIn />;
    } else {
      return (
        <div className="dropdown">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <UserAvatar />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/mygames"} > 
                <Button variant={"outline"} className="w-full"> My Games</Button>
                </Link>
              </li>
              <li>
                <SignOut />
              </li>
            </ul>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="navbar bg-base-100 dark:bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu className="h-8  w-8 text-white dark:text-base-100" />
          </div>
        </div>
        <Link href={"/"} className="btn btn-ghost text-white text-xl">
          Sudoken
        </Link>
     
        <Link href={"/leaderboard"} className="btn btn-ghost text-white text-l">
         LeaderBoard
        </Link>
      </div>

      <div className="navbar-end space-x-2">
        <LoginLogout />
      </div>
    </div>
  );
}
