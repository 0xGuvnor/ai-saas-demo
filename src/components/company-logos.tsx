import { companyLogos } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

function CompanyLogos({ className }: Props) {
  return (
    <div className={cn(className)}>
      <h5 className="tracking-tagline mb-6 text-center font-grotesk text-xs font-light uppercase text-n-1/50">
        Helping people create beautiful content
      </h5>

      <ul className="flex">
        {companyLogos.map((logo, id) => (
          <li
            key={id}
            className="flex h-[8.5rem] flex-1 items-center justify-center"
          >
            <Image src={logo} alt="Company logo" width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CompanyLogos;
