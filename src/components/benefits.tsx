import { benefits } from "@/constants";
import Arrow from "@/assets/svg/Arrow";
import Heading from "./heading";
import Section from "./section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "@/assets/svg/ClipPath";
import Image from "next/image";

function Benefits() {
  return (
    <Section id="features">
      <div className="container relative z-20">
        <Heading
          title="Chat Smarter, Not Harder with Brainwave"
          className="md:max-w-md lg:max-w-2xl"
        />

        <div className="mb-10 flex flex-wrap gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              style={{
                backgroundImage: `url(${benefit.backgroundUrl})`,
              }}
              className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]"
            >
              <div className="pointer-events-none relative z-20 flex min-h-[22rem] flex-col p-[2.4rem]">
                <h5 className="mb-5 text-2xl leading-normal">
                  {benefit.title}
                </h5>

                <p className="mb-6 text-[0.875rem] font-light leading-6 text-n-3 md:text-base">
                  {benefit.text}
                </p>

                <div className="mt-auto flex items-center">
                  <Image
                    src={benefit.iconUrl}
                    alt={benefit.title}
                    width={48}
                    height={48}
                  />
                  <p className="ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {benefit.light && <GradientLight />}

              <div
                style={{ clipPath: "url(#benefits)" }}
                className="absolute inset-0.5 bg-n-8"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-10">
                  {benefit.imageUrl && (
                    <Image
                      src={benefit.imageUrl}
                      width={380}
                      height={362}
                      alt={benefit.title}
                      className="size-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
export default Benefits;
