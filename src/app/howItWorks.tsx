"use client";
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Stack,
  StackDivider,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";

export default function HowItWorks() {
  const process = [
    "Signup at PIAIC Portal.",
    "Submit the online application.",
    "Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.",
    "Pass all PIAIC exams with an average score of at least 70%.",
  ];
  const roadMap = [
    "Accepting applications in Karachi",
    "Accepting applications in Islamabad",
    "Accepting applications in Lahore   ",
    "Accepting applications in Peshawar",
  ];
  const [isMediumOrSmallThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <Card py="10rem">
      <CardHeader>
        <Heading
          size={["lg", "lg", "2xl"]}
          color="green.500"
          textAlign="center"
        >
          How It Works
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="8">
          <Box>
            <Flex flexGrow={5}>
              {isMediumOrSmallThan768 ? null : (
                <Flex justifyContent="center" flex="1">
                  <InfoIcon mr="4" color="green.500" fontSize="3xl" />
                </Flex>
              )}

              <Flex
                direction="column"
                flex={isMediumOrSmallThan768 ? 5 : 4}
                alignItems="center"
              >
                <Heading w="full" mb="4" size={["sm", "sm", "md"]}>
                  PIAIC will launch classes in the following locations, one city
                  at a time, in the following order
                </Heading>
                <Divider />

                <Flex
                  w="full"
                  my="4"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  {isMediumOrSmallThan768 ? null : (
                    <Image src="map.png" alt="pakistan map" />
                  )}

                  <List spacing={3}>
                    <Heading size="md" textTransform="uppercase">
                      City by City Roadmap
                    </Heading>
                    {roadMap.map((text) => (
                      <ListItem fontSize={[16, 16, 20]}>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        {text}
                      </ListItem>
                    ))}
                  </List>
                </Flex>
              </Flex>
            </Flex>
          </Box>

          <Box>
            <Flex flexGrow={5}>
              {isMediumOrSmallThan768 ? null : (
                <Flex justifyContent="center" flex="1">
                  <InfoIcon mr="4" color="green.500" fontSize="3xl" />
                </Flex>
              )}

              <Flex direction="column" flex={isMediumOrSmallThan768 ? 5 : 4}>
                <Heading mb="4" size={["sm", "sm", "md"]}>
                  To participate in the program and become eligible for the most
                  prestigious credentials for AI, Cloud and Blockchain
                  technologies in the world, students must complete the
                  following process
                </Heading>
                <Divider />
                <OrderedList my="4" spacing={3}>
                  {process.map((text, index) => (
                    <>
                      <ListItem fontSize={[16, 16, 20]}>{text}</ListItem>
                      {!index ? (
                        <Link
                          href="https://portal.piaic.org/signup"
                          target="_blank"
                        >
                          <Text
                            fontWeight={600}
                            color="green.500"
                            fontSize={[16, 16, 18]}
                          >
                            Click Here
                          </Text>
                        </Link>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </OrderedList>
              </Flex>
            </Flex>
          </Box>

          <Box>
            <Flex flexGrow={5}>
              {isMediumOrSmallThan768 ? null : (
                <Flex justifyContent="center" flex="1">
                  <InfoIcon mr="4" color="green.500" fontSize="3xl" />
                </Flex>
              )}

              <Flex direction="column" flex={isMediumOrSmallThan768 ? 5 : 4}>
                <Text fontSize={["sm", "sm", "lg"]}>
                  3 All programs are one year long in duration. Each program is
                  divided into four quarters (12 weeks each). Classes are held
                  once a week. In the initial stages, classes will be held only
                  on Sundays. There will 6 sections of classes available,
                  including Artificial Intelligence, Cloud Native and Mobile Web
                  Computing, Blockchain, Internet of Things, 5G and Software
                  Defined Networking and Quantum Computing . Each class will be
                  3 hours in duration per week, for a total of 36 hours per
                  quarter or 144 hours for the entire year.{" "}
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box>
            <Flex flexGrow={5}>
              {isMediumOrSmallThan768 ? null : (
                <Flex justifyContent="center" flex="1">
                  <InfoIcon mr="4" color="green.500" fontSize="3xl" />
                </Flex>
              )}

              <Flex direction="column" flex={isMediumOrSmallThan768 ? 5 : 4}>
                <Text size={["sm", "sm", "lg"]}>
                  Those students who wish to participate in the program online
                  can check the distance learning option in the application
                  form. Please note that distance learning students must also
                  take proctored exams on site, just like the onsite students.
                  <br />
                  <br />
                  The fee structure for onsite students is PKR 1,000 per month
                  for 12 months, payable in 4 installments of PKR 3,000, before
                  the start of each quarter.
                  <br />
                  <br />
                  The fee structure for distance learning students is PKR 500
                  per month for 12 months, payable in 4 installments of PKR
                  1,500, before the start of each quarter.{" "}
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box>
            <Flex flexGrow={5}>
              {isMediumOrSmallThan768 ? null : (
                <Flex justifyContent="center" flex="1">
                  <InfoIcon mr="4" color="green.500" fontSize="3xl" />
                </Flex>
              )}

              <Flex direction="column" flex={isMediumOrSmallThan768 ? 5 : 4}>
                <Text fontSize={["sm", "sm", "lg"]}>
                  Please note, all fees will be collected by Saylani Welfare
                  Trust, the most trusted NGO in Pakistan. Saylani has strict
                  audit processes already in place to ensure proper
                  accountability of funds.{" "}
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box>
            <Flex flexGrow={5}>
              {isMediumOrSmallThan768 ? null : (
                <Flex justifyContent="center" flex="1">
                  <InfoIcon mr="4" color="green.500" fontSize="3xl" />
                </Flex>
              )}

              <Flex direction="column" flex={isMediumOrSmallThan768 ? 5 : 4}>
                <Text fontSize={["sm", "sm", "lg"]}>
                  Please note, this is a highly prestigious program. Due to the
                  high level of difficulty, only 10% of students will be awarded
                  the PIAIC certifications.{" "}
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box>
            <Flex flexGrow={5}>
              {isMediumOrSmallThan768 ? null : (
                <Flex justifyContent="center" flex="1">
                  <InfoIcon mr="4" color="green.500" fontSize="3xl" />
                </Flex>
              )}
              <Flex direction="column" flex={isMediumOrSmallThan768 ? 5 : 4}>
                <Text fontSize={["sm", "sm", "lg"]}>
                  For questions related to admissions, you may call us on the
                  PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.
                  <br />
                  Please note we are closed on Fridays.
                  <br />
                  For technical questions related to coursework, you may contact
                  us via email at education@piaic.org.
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
