import Image from "next/image";
import Section from "./section";
import { smallSphere, stars } from "@/assets";
import Heading from "./heading";
import PricingList from "./pricing-list";
import { LeftLine, RightLine } from "./design/Pricing";
import Link from "next/link";

function Pricing() {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-20">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <Image
            src={smallSphere}
            alt="Sphere"
            width={255}
            height={255}
            className="relative z-10"
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={stars}
              width={950}
              height={400}
              alt="Stars"
              className="w-full"
            />
          </div>
        </div>

        <Heading
          title="Pay once, use forever"
          tag="Get started with Brainwave"
          className="md:text-center"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={"/pricing"}
            className="border-b font-code text-xs font-bold uppercase tracking-wider"
          >
            See the full details
          </Link>
        </div>
      </div>
    </Section>
  );
}
export default Pricing;
