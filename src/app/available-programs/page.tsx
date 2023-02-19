"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AvailablePrograms() {
  const [isMediumOrSmallThan768] = useMediaQuery("(max-width: 768px)");
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  return (
    <Box pt="32" pb="20" m="0 auto" maxW="90%">
      <Heading
        mt="8"
        mb="16"
        size={["lg", "lg", "2xl"]}
        color="green.500"
        textAlign="center"
      >
        Available Programs
      </Heading>

      <Grid
        templateColumns={"repeat(2, 1fr)"}
        templateRows="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colStart={1} colSpan={isMediumOrSmallThan768 ? 2 : 1}>
          <Card bg="#11AD8E">
            <CardHeader>
              <Heading size="md">Artificial Intelligence</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                Program Structure
                <br />A four-quarter AI program in Data Science, Machine
                Learning, and Deep Learning.
              </Text>

              <br />
              <Divider />
              <Collapse in={toggle1} animateOpacity>
                <br />
                <Text>
                  A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING
                  PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE
                  RISE OF AI.
                </Text>
              </Collapse>
            </CardBody>
            <CardFooter>
              <Button onClick={() => setToggle1(!toggle1)}>View More</Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem
          colStart={isMediumOrSmallThan768 ? 1 : 2}
          colSpan={isMediumOrSmallThan768 ? 2 : 1}
          rowStart={2}
        >
          <Card bg="#11AD8E">
            <CardHeader>
              <Heading size="md">
                Cloud Native and Mobile Web Computing Specialist
              </Heading>
            </CardHeader>

            <CardBody>
              <Text>
                Program Structure
                <br />A four-quarter cloud computing program.
              </Text>

              <br />
              <Divider />
              <Collapse in={toggle2} animateOpacity>
                <br />
                <Text>
                  A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE
                  BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF
                  MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.
                </Text>
              </Collapse>
            </CardBody>
            <CardFooter>
              <Button onClick={() => setToggle2(!toggle2)}>View More</Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem
          colStart={1}
          colSpan={isMediumOrSmallThan768 ? 2 : 1}
          rowStart={3}
        >
          <Card bg="#11AD8E">
            <CardHeader>
              <Heading size="md">BlockChain Specialist</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                Program Structure
                <br />
                Four Quarters of Blockchain Course Work
              </Text>

              <br />
              <Divider />
              <Collapse in={toggle3} animateOpacity>
                <br />
                <Text>
                  A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS
                  GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH
                  AND SMART CONTRACTS
                </Text>
              </Collapse>
            </CardBody>
            <CardFooter>
              <Button onClick={() => setToggle3(!toggle3)}>View More</Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem
          colStart={isMediumOrSmallThan768 ? 1 : 2}
          colSpan={isMediumOrSmallThan768 ? 2 : 1}
          rowStart={4}
        >
          <Card bg="#11AD8E">
            <CardHeader>
              <Heading size="md">Internet of Things and AI Specialist</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                Program Structure
                <br />
                Six Quarters of IOT Course Work
              </Text>

              <br />
              <Divider />
              <Collapse in={toggle4} animateOpacity>
                <br />
                <Text>
                  A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE
                  BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET
                  OF THINGS AND AI
                </Text>
              </Collapse>
            </CardBody>
            <CardFooter>
              <Button onClick={() => setToggle4(!toggle4)}>View More</Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem
          colStart={1}
          colSpan={isMediumOrSmallThan768 ? 2 : 1}
          rowStart={5}
        >
          <Card bg="#11AD8E">
            <CardHeader>
              <Heading size="md">Certified Web 3.0 and Metaverse</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                Program Structure
                <br />
                Four Quarters of Web 3.0 and Metaverse
              </Text>

              <br />
              <Divider />
              <Collapse in={toggle5} animateOpacity>
                <br />
                <Text>
                  The Future of the Web is Web 3.0, Metaverse, and Edge
                  Computing. Panaverse DAO is a movement to spread these
                  technolgies globally. It is community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders and service
                  providers.
                </Text>
              </Collapse>
            </CardBody>
            <CardFooter>
              <Button onClick={() => setToggle5(!toggle5)}>View More</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
}
