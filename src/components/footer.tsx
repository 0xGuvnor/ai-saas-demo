import { socials } from "@/constants";
import Section from "./section";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <Section crosses className="px-0 py-10">
      <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        <p className="text-sm text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              target="_blank"
              className="flex size-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
            >
              <Image
                src={social.iconUrl}
                width={16}
                height={16}
                alt={social.title}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
}
export default Footer;
