import { cn } from "@/lib/utils";
import SectionSvg from "../assets/svg/SectionSvg";

import { ReactNode } from "react";

interface Props {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: ReactNode;
}

function Section({
  children,
  className,
  crosses,
  crossesOffset,
  customPaddings,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        customPaddings ||
          `py-10 lg:py-16 xl:py-20 ${crosses && "lg:py-32 xl:py-40"}`,
        className,
      )}
    >
      {children}

      <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:left-7.5 xl:left-10" />
      <div className="pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={cn(
              "pointer-events-none absolute left-7.5 right-7.5 top-0 hidden h-0.25 bg-stroke-1",
              "lg:block",
              "xl:left-10 xl:right-10",
              crossesOffset && crossesOffset,
            )}
          ></div>
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
}
export default Section;
