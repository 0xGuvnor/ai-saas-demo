import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import brackets from "@/assets/svg/Brackets";

interface Props {
  children: ReactNode;
  className?: string;
}

function Tagline({ children, className }: Props) {
  return (
    <div
      className={cn(
        "tracking-tagline flex items-center font-grotesk text-xs font-light uppercase",
        className,
      )}
    >
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets()}
    </div>
  );
}
export default Tagline;
