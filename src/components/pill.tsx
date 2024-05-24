export default function Pill({data}:any) {
    return (
    
        <div className="w-32 flex justify-center items-center p-4 bg-orange-600 rounded-full pill">
          <p className="text-2xl ">{data}</p>
        </div>
      
    );
}