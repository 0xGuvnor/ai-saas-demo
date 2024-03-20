import Benefits from "@/components/benefits";
import Collaboration from "@/components/collaboration";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
    </main>
  );
}
