import { MainSection } from "./MainSection";
import Navigation from "./Navigation";
import { SecondSection } from "./SecondSection";
import { WhyToJoin } from "./WhyToJoin";

export default function Home() {
  return (
    <>
      <Navigation />
      <MainSection />
      <SecondSection />
      <WhyToJoin />
    </>
  );
}
