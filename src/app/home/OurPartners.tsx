"use client";
import { Box, Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";

export const OutParners = () => {
  const [isMediumOrSmallThan768] = useMediaQuery("(max-width: 768px)");
  const context = [
    { size: "75px", img: "partner2.png" },
    { size: "183px", img: "partner3.png" },
    { size: "214px", img: "partner4.png" },
    { size: "130px", img: "partner5.png" },
    { size: "95px", img: "partner6.png" },
    { size: "85px", img: "partner7.png" },
  ];

  return (
    <Flex
      mt={["40px", "40px", "132px"]}
      mx="auto"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Heading
        color={"#11AD8E"}
        fontWeight={700}
        mb={["40px", "40px", "74px"]}
        fontSize={["22px", "22px", "48px"]}
      >
        Out Partners
      </Heading>

      {!isMediumOrSmallThan768 ? (
        <Box position="relative" w="full">
          <Box position="absolute" left="70px" bottom="-15px">
            <Image src="flying_man.png" alt="flying man" />
          </Box>
        </Box>
      ) : null}

      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #191A1B"
        boxShadow="0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
        py={[8, 8, 0]}
      >
        {context.map((item) => (
          <Box
            key={item.img}
            mx="7px"
            my="15px"
            display="flex"
            justifyContent="center"
            width={["full", "full", "auto"]}
          >
            <Image src={item.img} w={item.size} alt={item.img} />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
