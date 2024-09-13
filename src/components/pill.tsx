import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export default function Pill({ data, color }: { data: string; color: string }) {
  return <Badge className={cn(color, "text-xl")}>{data}</Badge>;
}
