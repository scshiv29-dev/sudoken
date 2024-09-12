"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { handleSignIn } from "../../actions";
import { Button } from "./ui/button";

export async function SignIn() {
  return (
    <Button variant="secondary" onClick={async () => await handleSignIn()}>
      <GitHubLogoIcon className="mr-2 h-5 w-5" /> Signin with GitHub
    </Button>
  );
}
