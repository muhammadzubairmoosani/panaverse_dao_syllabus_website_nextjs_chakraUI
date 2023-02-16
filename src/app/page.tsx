import { BecomeCertified } from "./BecomeCertified";
import { Footer } from "./Footer";
import Navigation from "./Navigation";
import { OprationalCities } from "./OprationalCities";
import { OutParners } from "./OurPartners";
import { TheProgram } from "./TheProgram";
import { WhyToJoin } from "./WhyToJoin";

export default function Home() {
  return (
    <>
      <Navigation />
      <BecomeCertified />
      <TheProgram />
      <WhyToJoin />
      <OutParners />
      <OprationalCities />
      <Footer />
    </>
  );
}
