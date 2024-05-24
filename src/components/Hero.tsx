import Link from "next/link";
import { auth, signOut } from "../auth";

export default async function Hero() {
  const session = await auth();
  const NavOption = () => {
    if (session?.user) {
      return (
        <button className="btn btn-primary">
          <Link href={"/play"}>'Play --{">"}</Link>
        </button>
      );
    } else {
      <button className="btn btn-primary">
        signin
        <Link href={"/signin"}></Link>
      </button>;
    }
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1632207190829-a97e41017175?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold font-inter text-base-900">
            Welcome to Sudoken
          </h1>
          <p className="mb-5">
            Sharpen your mind and challenge yourself with Sudoku puzzles of all
            difficulties! Login and play on our user-friendly platform designed
            for both beginners and Sudoku masters.
          </p>
          <NavOption />
        </div>
      </div>
    </div>
  );
}
