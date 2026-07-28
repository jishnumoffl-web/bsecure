import AboutHero from "@/components/about/Abouthero";
import Achievements from "@/components/about/Achievements";
import CoreValues from "@/components/about/CoreValues";
import MissionVision from "@/components/about/MissionVision";
import OurCommitment from "@/components/about/OurCommitment";
import OurStory from "@/components/about/Ourstory";
import Timeline from "@/components/about/Timeline";

export default function Aboutpage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <Achievements />
      <OurCommitment />
    </>
  );
}
