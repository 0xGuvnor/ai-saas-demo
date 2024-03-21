import { roadmap } from "@/constants";
import Heading from "./heading";
import Section from "./section";
import Image from "next/image";
import { check2, grid, loading1 } from "@/assets";
import Tagline from "./tagline";
import { cn } from "@/lib/utils";

function Roadmap() {
  return (
    <Section id="roadmap" className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading title="What we're working on" tag="Ready to get started" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.id}
                className={cn(
                  "rounded-[2.5rem] p-0.25 md:flex even:md:translate-y-[7rem]",
                  item.colorful ? "bg-conic-gradient" : "bg-n-6",
                )}
              >
                <div className="relative overflow-hidden rounded-[2.5rem] bg-n-8 p-8 xl:p-15">
                  <div className="absolute left-0 top-0 max-w-full">
                    <Image
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                      className="w-full"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-8 flex max-w-[27rem] items-center justify-between md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center rounded bg-n-1 px-4 py-1 text-n-8">
                        <Image
                          src={status === "Done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt="Status"
                          className={cn(
                            "mr-2.5",
                            status !== "Done" && "animate-spin",
                          )}
                        />

                        <div className="tracking-tagline font-grotesk text-xs font-light uppercase">
                          {status}
                        </div>
                      </div>
                    </div>

                    <div className="-mx-15 -my-10 mb-10">
                      <Image
                        src={item.imageUrl}
                        width={630}
                        height={420}
                        alt={item.title}
                        className="w-full"
                      />
                    </div>
                    <h4 className="mb-4 text-[2rem] leading-normal">
                      {item.title}
                    </h4>
                    <p className="text-[0.875rem] font-light leading-6 text-n-4 md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
export default Roadmap;
