import Marquee from "@/components/ui/marquee";

import Bio from "@/components/layout/Bio";
import LandingScreen from "@/components/layout/LandingScreen";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <LandingScreen />
      <div className="absolute bottom-0 left-0 w-full">
        <Marquee />
      </div>
      <Bio />
    </div>
  );
}
