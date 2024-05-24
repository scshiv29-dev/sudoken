import Card from "@/components/Card";

export default async function Play() {
  return (
    <div className="flex flex-wrap  p-4">
      
        <Card text={"Easy"} color={"btn-success"} />
        <Card text={"Medium"} color={"btn-warning"} />
        <Card text={"Hard"} color={"btn-error"} />

        <Card text={"Random"} color={"btn-primary"} />
   
    </div>
  );
}
