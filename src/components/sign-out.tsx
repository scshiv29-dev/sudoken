"use client";
import { LogOut } from "lucide-react";
import { handleSignOut } from "../../actions";
import { Button } from "./ui/button";

export async function SignOut() {
  return (
    <Button onClick={() => handleSignOut()} variant="outline">
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </Button>
  );
}
