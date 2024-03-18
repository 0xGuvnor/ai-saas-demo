import Benefits from "@/components/benefits";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Header />
      <Hero />
      <Benefits />
    </main>
  );
}
