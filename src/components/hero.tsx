"use client";

import Image from "next/image";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

import { curve, heroBackground, robot } from "../assets";
import Section from "./section";
import { Button } from "./ui/button";
import { heroIcons } from "@/constants";
import { BackgroundCircles, Gradient } from "./design/Hero";
import Generating from "./generating";
import Notification from "./notification";
import CompanyLogos from "./company-logos";

function Hero() {
  const parallexRef = useRef<HTMLDivElement>(null);

  return (
    <Section
      id="hero"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      className="-mt-[5.25rem] pt-[12rem]"
    >
      <div ref={parallexRef} className="container relative">
        <div className="relative z-10 mx-auto mb-[4rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6rem]">
          <h1 className="mb-6 text-[2.5rem] font-semibold leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
            Explore the Possibilities of AI with{" "}
            <span className="relative inline-block">
              Brainwave
              <Image
                src={curve}
                alt="Curve"
                width={624}
                height={28}
                className="absolute left-0 top-full w-full xl:-mt-2"
              />
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-[0.875rem] leading-[1.5rem] text-n-2 md:text-[1rem] md:leading-[1.75rem] lg:mb-8 lg:text-[1.25rem] lg:leading-8">
            Unleash the power of AI with Brainwave. Upgrade your productivity,
            the open source AI chat app.
          </p>

          <Button white variant={"white"}>
            Get started
          </Button>
        </div>

        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-10 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative rounded-[1rem] bg-n-8">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10"></div>

              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={robot}
                  alt="Hero"
                  width={1024}
                  height={490}
                  className="w-full translate-y-[8%] scale-[1.7] md:-translate-y-[10%] md:scale-100 lg:-translate-y-[23%]"
                />

                <Generating className="absolute bottom-5 left-4 right-4 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute -left-[5.5rem] bottom-[7.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 px-1 py-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, id) => (
                      <li key={id} className="p-5">
                        <Image src={icon} alt={icon} width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    title="Code generation"
                    className="absolute -right-[5.5rem] bottom-[11rem] hidden w-[18rem] xl:flex"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={heroBackground}
              alt="Hero background"
              width={1440}
              height={1800}
              className="w-full"
            />
          </div>

          <BackgroundCircles parallaxRef={parallexRef} />
        </div>

        <CompanyLogos className="relative z-10 mt-20 hidden lg:block" />
      </div>
    </Section>
  );
}
export default Hero;
