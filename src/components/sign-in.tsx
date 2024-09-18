"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { handleSignIn } from "../../actions";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
export function SignIn({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const { mutate: login, isPending } = useMutation({
    mutationFn: handleSignIn,
    onSuccess: () => {
      toast.success("Logged in successfully");
      router.refresh();
    },
    onError: () => {
      toast.error("Error logging in.");
    },
  });
  return (
    <Button variant={"secondary"} className={className} onClick={() => login()}>
      {isPending ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Please Wait...
        </>
      ) : children ? (
        children
      ) : (
        <>
          <GitHubLogoIcon className="mr-2 h-5 w-5" /> Signin with GitHub
        </>
      )}
    </Button>
  );
}
