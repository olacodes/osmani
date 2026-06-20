import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { CursorSpotlight } from "@/components/effects/cursor-spotlight";
import { Hero } from "@/components/hero/hero";
import { ArmsRow } from "@/components/sections/marquee";
import { Ventures } from "@/components/sections/ventures";
import { Flagship } from "@/components/sections/flagship";
import { Capabilities } from "@/components/sections/capabilities";
import { Manifesto } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { CtaBand } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <SiteNav />
      <main className="flex-1">
        {/* Spacious opener */}
        <Hero />

        {/* Compact anchor row — breath after the hero */}
        <ArmsRow />

        {/* Spacious */}
        <About />

        {/* Medium — the four arms */}
        <Ventures />

        {/* Spacious — flagship product spotlight */}
        <Flagship />

        {/* Medium — capabilities grid */}
        <Capabilities />

        {/* Spacious — manifesto pull */}
        <Manifesto />

        {/* Spacious closer */}
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
