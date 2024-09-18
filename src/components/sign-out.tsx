"use client";
import { Loader2, LogOut } from "lucide-react";
import { handleSignOut } from "../../actions";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function SignOut() {
  const router = useRouter();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: handleSignOut,
    onSuccess: () => {
      toast.success("Logged out successfully");
      router.refresh();
    },
    onError: () => {
      toast.error("Error logging out.");
    },
  });
  return (
    <Button onClick={() => logout()} variant="outline">
      {isPending ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Please Wait...
        </>
      ) : (
        <>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </>
      )}
    </Button>
  );
}
