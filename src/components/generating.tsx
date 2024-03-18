import Image from "next/image";
import { loading } from "../assets";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function Generating({ className }: Props) {
  return (
    <div
      className={cn(
        "flex h-[3.5rem] items-center rounded-[1.7rem] bg-n-8/80 px-6 text-base",
        className,
      )}
    >
      <Image src={loading} alt="Loading" className="mr-4 size-5 animate-spin" />
      AI is generating
    </div>
  );
}
export default Generating;
