import { BecomeCertified } from "./BecomeCertified";
import { OprationalCities } from "./OprationalCities";
import { OutParners } from "./OurPartners";
import { TheProgram } from "./TheProgram";
import { WhyToJoin } from "./WhyToJoin";

export const HomePage = () => {
  return (
    <>
      <BecomeCertified />
      <TheProgram />
      <WhyToJoin />
      <OutParners />
      <OprationalCities />
    </>
  );
};
