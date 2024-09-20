import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export default function Pill({ data, color }: { data: string; color: string }) {
  return (
    <Badge className={cn(color, "text-base sm:text-xl px-2 py-1 sm:px-3 sm:py-2")}>
      {data}
    </Badge>
  );
}