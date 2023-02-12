"use client";
import {
  Heading,
  Text,
  Image,
  Flex,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";

export const WhyToJoin = () => {
  const context = [
    { title: "Product Owner", img: "product_owner.png" },
    { title: "Freelance", img: "freelance.png" },
    { title: "Access to Global Market by dao", img: "global.png" },
    { title: "Boost Economy", img: "economy.png" },
  ];
  return (
    <Flex
      h={["auto", "auto", "745px"]}
      my={["40px", "60px", "80px", "132px"]}
      mx={["auto", "auto", "auto"]}
      w="85%"
      alignItems="center"
      justifyContent={"space-between"}
      direction="column"
      border="1px solid white"
    >
      <Heading color={"#11AD8E"} fontWeight={700} fontSize="48px">
        Why to join
      </Heading>

      <Text
        mt="48px"
        mb="84px"
        fontWeight={400}
        fontSize="20px"
        color="#ffffff"
      >
        In this brand-new type of curriculum, students will learn how to make
        money and boost exports in the classroom and will begin doing so within
        six months of the program's beginning. It resembles a cross between a
        corporate venture and an educational project.
      </Text>

      <Flex>
        {context.map((item) => (
          <Flex
            border="1px solid #11AD8E"
            direction={"column"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius="16px"
            w="280px"
            h="416px"
            mx="24px"
          >
            <Text fontWeight={400} fontSize="32px" color={"white"}>
              {item.title}
            </Text>
            <Image src={item.img} w="full" />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
{
  /* <Flex direction={"column"} alignItems="center" w="100%">
  <Box
    maxW="748px"
    borderRadius="16px"
    py={["20px", "20px", "66px"]}
    px={["20px", "20px", "54px"]}
    bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
    boxShadow="0px 8px 10px rgb(0 0 0 / 14%), 0px 3px 14px rgb(0 0 0 / 12%), 0px 5px 5px rgb(0 0 0 / 20%)"
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
</Flex> */
}
