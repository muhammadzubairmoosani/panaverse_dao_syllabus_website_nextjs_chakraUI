"use client";

import { LinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Spacer,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const ContactUs = () => {
  return (
    <Flex direction="column" maxW="90%" mx="auto">
      <Flex
        //   py="10rem"
        flexGrow="3"
      >
        <Box textAlign="center" flex="1">
          <Avatar
            boxShadow={"outline"}
            size="2xl"
            name="Dr arif alvi"
            src="dr_arif_alvi.jpeg"
          />
          <Text my="3" fontSize={"3xl"}>
            Dr. Arif Alvi
          </Text>
          <Text>President of the Islamic Republic of Pakistan</Text>
          <Link href="https://www.facebook.com/Dr.ArifAlvi/" target="_blank">
            <LinkIcon my="3" cursor="pointer" />
          </Link>
        </Box>
        <Box flex="2">
          <Text fontSize="larger">
            Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic
            of Pakistan on 9th September 2018.
            <br /> <br />
            Dr. Arif Alvi was born in 1949 and completed his early education in
            Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
            Montmorency College of Dentistry, Lahore where he was declared the
            “Best Graduate”. He completed his Masters of Science in the field of
            Prosthodontics from University of Michigan (1975) and in
            Orthodontics from University of Pacific, San Francisco (1982). He
            was awarded fellowship ‘Diplomatic American Board of Orthodontists
            (1995)’.
            <br /> <br />
            President Dr. Arif Alvi has been a renowned professional and has
            held many important positions in the field of Dentistry. He remained
            Dean of Orthodontics, College of Physicians and Surgeons of
            Pakistan, President, Pakistan Dental Association (1997-2001),
            Pakistan Association of Orthodontists (2005), Asia Pacific Dental
            Federation (2006-07) and Councilor of the World Dental Federation
            (2007-2013). Through his sheer hard work in the World Dental
            Federation, he was able to get the declaration of 20th March as
            World Oral Health Day. He is also an author of a book, theses, and
            many articles.
            <br /> <br />
            Dr. Arif Alvi’s political career commenced with his pro-democracy
            struggle against the dictatorship of General Ayub Khan. He is a
            founding member of Pakistan Tehreek-e-Insaf (PTI) that came into
            being in 1996. He remained a member of the PTI’s Central Executive
            Committee since its inception and has held the offices of PTI
            President of Sindh (1997-2001), Central Vice President (2001-2006)
            and Secretary General (2006-2013). In line with Constitution of
            Pakistan, he resigned from all the positions of PTI before assuming
            the prestigious office of the President.
            <br /> <br />
            During his tenure as the Secretary General of the party, Dr. Arif
            Alvi introduced social media platform in the politics of Pakistan.
            He was instrumental in holding intra-party election (2012-2013) and
            enabled millions of party members to digitally participate in the
            election process. He was elected as member of National Assembly from
            Karachi in 2013 and 2018 and was instrumental in drafting and the
            passage of many bills including one on Alternate Dispute Resolution.
            He also chaired the sub-committee of EVM’s, Digital Identification
            of voters and voting of overseas Pakistanis. The latter has finally
            come to fruition. Dr. Arif Alvi has keen interest in education and
            health sectors. Provision of basic facilities to the common man and
            uplifting the country’s image are very close to his heart. He
            considers people of Pakistan as the most precious asset and,
            therefore, accords special focus to human resource development in
            the country. He is happily married and has four children.
          </Text>
        </Box>
      </Flex>

      <Flex
        //   py="10rem"
        flexGrow="3"
      >
        <Box flex="2">
          <Text fontSize="larger">
            CEO of Panacloud, the world’s first Integrated API Ownership
            Economy, Crowdfunding, and Development Platform. Volunteer COO of
            PIAIC, an initiative by the President of Pakistan for AI and
            computing mass education. Mentor and software developer with 20+
            years of expertise in cloud and serverless computing, software
            design, project management, and API and App development. Expert in
            concept, business modeling & strategy development for startups,
            specializing in DeFi and token economics. Mentored and trained
            hundreds of thousands of developers. Triple masters degrees in
            business administration, engineering, and finance from Arizona State
            University. Master in Economics from KU. Certified Public Accountant
            and Certified Management Accountant in USA.
            <br /> <br />
            Extensive experience in software architecture, design, development,
            implementation, and integration. Worked as a developer in Silicon
            Valley for 7 years. Hands-on work including thousands of hours of
            development work logged recently resulting in multiple successful
            projects for cutting edge startups like Panacloud, OpenPD,
            Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts,
            etc.
            <br /> <br />
            Worked with a combination of Agile, Lean Startup, and Design
            Thinking concepts and methodologies. Excellent communicator, mentor,
            instructor, and coach.
            <br /> <br />
            Received Microsoft's Most Valuable Professional (MVP) awards for
            eight consecutive years in client and cloud technologies.
          </Text>
        </Box>

        <Box textAlign="center" flex="1">
          <Avatar
            boxShadow={"outline"}
            size="2xl"
            name="Sir Zia Khan"
            src="sir_zia_khan.jpeg"
          />
          <Text my="3" fontSize={"3xl"}>
            Sir. Zia Khan
          </Text>
          <Text>CEO of Panacloud</Text>
          <Link href="https://www.linkedin.com/in/ziaukhan/" target="_blank">
            <LinkIcon cursor="pointer" my="3" />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
