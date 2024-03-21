import { pricing } from "@/constants";
import { Button } from "./ui/button";
import Image from "next/image";
import { check } from "@/assets";

interface Props {}

function PricingList({}: Props) {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((price) => (
        <div
          key={price.id}
          className="h-full w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1"
        >
          <h4 className="mb-4 text-[2rem] leading-normal">{price.title}</h4>
          <p className="mb-3 min-h-[4rem] text-[0.875rem] font-light leading-6 text-n-1/50 md:text-base">
            {price.description}
          </p>

          <div className="mb-6 flex h-[5.5rem] items-center">
            {price.price && (
              <>
                <div className="text-[2rem] leading-normal md:text-[2.5rem]">
                  $
                </div>
                <div className="text-[5.5rem] font-bold leading-none">
                  {price.price}
                </div>
              </>
            )}
          </div>

          <Button
            variant={price.price ? "white" : "default"}
            white={!!price.price}
            className="mb-6 w-full"
          >
            {price.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {price.features.map((feature, id) => (
              <li
                key={id}
                className="flex items-start border-t border-n-6 py-5"
              >
                <Image src={check} width={24} height={24} alt="Checkmark" />
                <p className="ml-4 text-[0.875rem] font-light leading-6 md:text-base">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default PricingList;
