import Image from "next/image";
import Heading from "./heading";
import Section from "./section";
import { check, service1, service2, service3 } from "@/assets";
import { brainwaveServices, brainwaveServicesIcons } from "@/constants";
import Generating from "./generating";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { cn } from "@/lib/utils";

function Services() {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          subtitle="Brainwave unlocks the potential of AI-powered apps"
        />

        <div className="relative">
          <div className="relative z-10 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem]">
            <div className="pointer-events-none absolute left-0 top-0 size-full md:w-3/5 xl:w-auto">
              <Image
                src={service1}
                alt="Smartest AI"
                width={800}
                height={730}
                className="size-full object-cover md:object-right"
              />
            </div>

            <div className="relative z-10 ml-auto max-w-[17rem]">
              <h4 className="mb-4 text-[2rem] leading-normal">Smartest AI</h4>
              <p className="mb-[3rem] text-[0.875rem] font-light leading-6 text-n-3 md:text-base">
                Brainwave unlocks the potential of AI-powered apps
              </p>
              <ul className="text-[0.875rem] font-light leading-6 md:text-base">
                {brainwaveServices.map((service, id) => (
                  <li
                    key={id}
                    className="flex items-start border-t border-n-6 py-4"
                  >
                    <Image src={check} alt="Checkmark" width={24} height={24} />
                    <p className="ml-4">{service}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute inset-x-4 bottom-4 border border-n-1/10 lg:bottom-8 lg:left-1/2 lg:right-auto lg:-translate-x-1/2" />
          </div>

          <div className="relative z-10 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] overflow-hidden rounded-3xl border border-n-1/10">
              <div className="absolute inset-0">
                <Image
                  src={service2}
                  alt="Robot"
                  width={630}
                  height={750}
                  className="size-full object-cover"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                <h4 className="mb-4 text-[2rem] leading-normal">
                  Photo editing
                </h4>
                <p className="mb-[3rem] text-[0.875rem] font-light leading-6 text-n-3 md:text-base">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="mb-4 text-[2rem] leading-normal">
                  Video generation
                </h4>
                <p className="mb-[2rem] text-[0.875rem] font-light leading-6 text-n-3 md:text-base">
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, id) => (
                    <li
                      key={id}
                      className={cn(
                        "flex items-center justify-center rounded-2xl",
                        id === 2
                          ? "size-[3rem] bg-conic-gradient p-0.25 md:size-[4.5rem]"
                          : "size-10 bg-n-6 md:size-15",
                      )}
                    >
                      <div
                        className={cn(
                          id === 2 &&
                            "flex size-full items-center justify-center rounded-[1rem] bg-n-7",
                        )}
                      >
                        <Image src={icon} width={24} height={24} alt={icon} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
                <Image
                  src={service3}
                  alt="Scary robot"
                  width={520}
                  height={400}
                  className="size-full object-cover"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
}
export default Services;
