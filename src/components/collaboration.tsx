import { collabApps, collabContent, collabText } from "@/constants";
import Section from "./section";
import Image from "next/image";
import { brainwaveSymbol, check } from "@/assets";
import curve2 from "@/assets/collaboration/curve-2.svg";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { LeftCurve, RightCurve } from "./design/Collaboration";

function Collaboration() {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="mb-4 text-[1.75rem] leading-[2.5rem] md:mb-8 md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight">
            AI chat app for seamless collaboration
          </h2>

          <ul className="mb-10 max-w-[22rem] md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <Image src={check} width={24} height={24} alt="Checkbox" />
                  <h6 className="ml-5 text-[0.875rem] font-light leading-6 md:text-base">
                    {item.title}
                  </h6>
                </div>

                {item.text && (
                  <p className="mt-3 text-[0.875rem] font-light leading-6 text-n-4 md:text-base">
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <Button>Try it now</Button>
        </div>

        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className="mb-4 text-[0.875rem] font-light leading-6 text-n-4 md:mb-16 md:text-base lg:mx-auto lg:mb-32 lg:w-[22rem]">
            {collabText}
          </p>

          <div className="relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 scale-75 rounded-full border border-n-6 md:scale-100">
            <div className="m-auto flex aspect-square w-60 rounded-full border border-n-6">
              <div className="m-auto aspect-square w-[6rem] rounded-full bg-conic-gradient p-[0.2rem]">
                <div className="flex size-full items-center justify-center rounded-full bg-n-8">
                  <Image
                    src={brainwaveSymbol}
                    alt="Brainwave symbol"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  style={{ rotate: `${index * 45}deg` }}
                  className={cn(
                    "absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom",
                  )}
                >
                  <div
                    style={{ rotate: `-${index * 45}deg` }}
                    className={cn(
                      "relative -top-[1.6rem] flex size-[3.2rem] rounded-xl border border-n-1/15 bg-n-7",
                    )}
                  >
                    <Image
                      src={app.icon}
                      alt={app.title}
                      width={app.width}
                      height={app.height}
                      className="m-auto"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
}
export default Collaboration;
