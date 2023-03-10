"use client";
import {
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";

export const BecomeCertified = () => {
  const [isMediumOrSmallThan769] = useMediaQuery("(max-width: 769px)");

  return (
    <SimpleGrid
      bgImage={"main_bg.png"}
      bgSize="cover"
      h={["525px", "525px", "525px", "780px"]}
      columns={isMediumOrSmallThan769 ? 1 : 2}
      columnGap={3}
      w="100"
    >
      <Flex
        alignItems={"flex-end"}
        justifyContent={"center"}
        direction="column"
      >
        <GridItem
          mx={["auto", "auto", "auto", "0"]}
          mt={["3rem", "3rem", "3rem", "0"]}
          maxW={["90%", "90%", "90%", "76%"]}
        >
          <Heading
            color="#11AD8E"
            fontSize={["24px", "28px", "28px", "48px"]}
            fontWeight={900}
          >
            <Text color={"#F5F5F5"}>Become</Text>
            Certified Web 3.0{" "}
            <Text color={"#F5F5F5"} as="span">
              and
            </Text>{" "}
            Metaverse Developer
          </Heading>
          <Text
            my="32px"
            fontSize={["16px", "18px", "18px", "24px"]}
            fontWeight={400}
            color="#F5F5F5"
          >
            Launch Your Dev Career With Web 3 and Metaverse Getting Ready for
            the Next Generation of the Internet
          </Text>
          <Link href="https://portal.piaic.org/" target="_blank">
            <Button
              size={["md", "md", "md", "lg"]}
              bg="#11AD8E"
              colorScheme="#11AD8E"
            >
              Join Now
            </Button>
          </Link>
        </GridItem>
      </Flex>
      {!isMediumOrSmallThan769 && (
        <Flex justifyContent={"center"} alignItems="flex-end">
          <GridItem>
            <Image src="meta_man.png" alt="Meta Man" w="full" />
          </GridItem>
        </Flex>
      )}
    </SimpleGrid>
  );
};
