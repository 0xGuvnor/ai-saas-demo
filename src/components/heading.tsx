import { cn } from "@/lib/utils";
import Tagline from "./tagline";

interface Props {
  className?: string;
  title: string;
  subtitle?: string;
  tag?: string;
}

function Heading({ title, className, subtitle, tag }: Props) {
  return (
    <div className={cn("mx-auto mb-12 max-w-[50rem] lg:mb-20", className)}>
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}

      {title && (
        <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 text-[0.875rem] font-light leading-6 text-n-4 md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
export default Heading;
