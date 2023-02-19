"use client";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export const WhyToJoin = () => {
  const context = [
    { title: "Product Owner", img: "product_owner.png", size: "123px" },
    { title: "Freelancer", img: "freelancer.png", size: "202px" },
    {
      title: "Access to Global Market by dao",
      img: "global.png",
      size: "129px",
    },
    { title: "Boost Economy", img: "economy.png", size: "191px" },
  ];
  return (
    <Flex
      // h={["auto", "auto", "745px"]}
      my={["40px", "60px", "80px", "132px"]}
      mx="auto"
      w="85%"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Heading
        color={"#11AD8E"}
        fontWeight={700}
        fontSize={["22px", "22px", "48px"]}
      >
        Why to join
      </Heading>

      <Text
        mt={["20px", "20px", "48px"]}
        mb={["20px", "20px", "68px"]}
        fontWeight={400}
        fontSize={["14px", "14px", "20px"]}
        // color="#ffffff"
        maxW="906px"
        textAlign="center"
      >
        In this brand-new type of curriculum, students will learn how to make
        money and boost exports in the classroom and will begin doing so within
        six months of the program&apos;s beginning. It resembles a cross between
        a corporate venture and an educational project.
      </Text>

      <Flex justifyContent="center" flexWrap="wrap">
        {context.map((item) => (
          <Flex
            key={item.title}
            border="1px solid #11AD8E"
            direction={"column"}
            justifyContent="space-evenly"
            alignItems={"center"}
            borderRadius="16px"
            w={["220px", "220px", "280px"]}
            h={["280px", "280px", "416px"]}
            m="18px"
            bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #191A1B"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
          >
            <Text
              fontWeight={400}
              textAlign="center"
              lineHeight="39px"
              fontSize={["22px", "22px", "32px"]}
              color={"white"}
            >
              {item.title}
            </Text>
            <Image src={item.img} w={item.size} alt={item.title} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
