"use server";
import { signIn, signOut } from "@/auth";

export const handleSignIn = async () => {
  await signIn("github");
};

export const handleSignOut = async () => {
  await signOut({ redirect: true, redirectTo: "/" });
};
