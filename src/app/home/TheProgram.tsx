"use client";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

export const TheProgram = () => {
  const [isMediumOrSmallThan1024] = useMediaQuery("(max-width: 1024px)");
  return (
    <Flex
      // h={["auto", "auto", "745px"]}
      my={["40px", "60px", "80px", "132px"]}
      mx={["auto", "auto", "auto"]}
      w="85%"
    >
      {!isMediumOrSmallThan1024 && (
        <Flex w="100%">
          <Box boxSize={"full"} display="flex" alignItems={"flex-end"}>
            <Image src="siting_man.png" alt="Meta Man" w="full" />
          </Box>
        </Flex>
      )}

      <Flex direction={"column"} alignItems="center" w="100%">
        <Box
          maxW="748px"
          borderRadius="16px"
          py={["20px", "20px", "66px"]}
          px={["20px", "20px", "54px"]}
          bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #191A1B"
          boxShadow="0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
          textAlign="center"
        >
          <Heading
            color="#11AD8E"
            fontSize={["22px", "22px", "48px"]}
            fontWeight={700}
          >
            The Program in a Nutshell
          </Heading>

          <Text
            fontWeight={700}
            fontSize={["16px", "16px", "32px"]}
            color="#11AD8E"
            textDecoration={"underline"}
            my={["18px", "18px", "32px"]}
          >
            Earn While You Learn
          </Text>

          <Text
            my="32px"
            fontSize={["14px", "14px", "20px"]}
            fontWeight={400}
            color="#ffffff"
          >
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program's beginning. It resembles a
            cross between a corporate venture and an educational project.{" "}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
