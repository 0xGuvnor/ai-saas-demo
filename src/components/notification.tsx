import { notificationImages } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notification1 } from "../assets";

interface Props {
  className?: string;
  title: string;
}

function Notification({ className, title }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur",
        className,
      )}
    >
      <Image
        src={notification1}
        alt="Notification Image"
        height={62}
        width={62}
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 text-base font-semibold leading-8">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="-m-0.5 flex">
            {notificationImages.map((item, id) => (
              <li
                key={id}
                className="flex size-6 overflow-hidden rounded-full border-2 border-n-12"
              >
                <Image
                  src={item}
                  alt={"Notification Image"}
                  width={20}
                  height={20}
                  className="w-full"
                />
              </li>
            ))}
          </ul>

          <div className="text-[0.875rem] font-light leading-6 text-n-13 md:text-base">
            1m ago
          </div>
        </div>
      </div>
    </div>
  );
}
export default Notification;
