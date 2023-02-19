"use client";
import { Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";

export const OprationalCities = () => {
  const [isMediumOrSmallThan1440] = useMediaQuery("(max-width: 1440px)");

  const context = [
    "operational_city1.png",
    "operational_city2.png",
    "operational_city3.png",
    "operational_city4.png",
  ];
  return (
    // <Box>
    <Flex
      my={["40px", "60px", "80px", "132px"]}
      justifyContent="center"
      alignItems="center"
      mx="47px"
      direction={isMediumOrSmallThan1440 ? "column" : "row"}
    >
      {isMediumOrSmallThan1440 ? (
        <Heading
          color={"#11AD8E"}
          fontWeight={700}
          mb={["40px", "40px", "74px"]}
          fontSize={["22px", "22px", "48px"]}
        >
          Operational Cities
        </Heading>
      ) : null}

      {!isMediumOrSmallThan1440 ? (
        <Flex
          // w="180px"
          // h="300px"
          justifyContent="flex-start"
          alignItems="center"
          // borderRadius="16px"
          position="relative"
          mr="-180px"
        >
          <Image src="theme_blob.png" alt="bg blur" />
          <Text
            position="absolute"
            color="#11AD8E"
            fontWeight="700"
            fontSize="48px"
            textAlign="center"
            zIndex="1"
            lineHeight="54px"
            maxW="293px"
            ml="20"
          >
            Operational Cities
          </Text>
        </Flex>
      ) : null}

      <Flex justifyContent="center" flexWrap="wrap">
        {context.map((img) => (
          <Flex
            key={img}
            boxShadow="drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 14px rgba(0, 0, 0, 0.12)) drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2))"
            borderRadius="16px"
            w="full"
            h={["300px", "full", "full"]}
            maxW={["full", "180px", "180px"]}
            mx="4"
          >
            <Image w="full" src={img} alt={img} />
          </Flex>
        ))}
        <Flex
          justifyContent="center"
          alignItems="center"
          borderRadius="16px"
          position="relative"
          w="full"
          maxW={["full", "180px", "180px"]}
          mx="4"
        >
          <Image
            h={["300px", "full", "full"]}
            w="full"
            src={"operational_city5.png"}
            alt="gray_image"
          />
          <Text
            position="absolute"
            color="#11AD8E"
            fontWeight="500"
            fontSize={["28px", "28px", "32px"]}
            textAlign="center"
            zIndex="1"
            lineHeight="32px"
          >
            Coming Soon
          </Text>
        </Flex>
      </Flex>
    </Flex>
    // </Box>
  );
};
