import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title: string;
}

function Heading({ title, className }: Props) {
  return (
    <div className={cn("mx-auto mb-12 max-w-[50rem] lg:mb-20", className)}>
      {title && (
        <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight">
          {title}
        </h2>
      )}
    </div>
  );
}
export default Heading;
