"use client";
import { EmailIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box bgImage="footer_bg.png" bgSize="cover">
      <Flex
        justifyContent="center"
        alignItems="center"
        py={["20px", "20px", "64px"]}
      >
        <Flex
          w="full"
          justifyContent="space-evenly"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box mx="4" my={["4", "4", "auto"]} w={["full", "45%", "auto"]}>
            <Image
              mx={["auto", "auto", "inherit"]}
              src="logo.png"
              alt="Dao logo"
            />
            <Text
              fontWeight={400}
              fontSize={["14px", "14px", "18px"]}
              color="white"
              mt="33px"
              mb="21px"
            >
              <EmailIcon color="#11AD8E" mr="15px" />
              Plot 245/2 M, PECHS Block 6, Karachi
            </Text>
            <Text
              fontWeight={400}
              fontSize={["14px", "14px", "18px"]}
              color="white"
            >
              <PhoneIcon color="#11AD8E" mr="15px" />
              +92-308-2220203
            </Text>
          </Box>
          <Box mx="4" my={["4", "4", "auto"]} w={["full", "45%", "auto"]}>
            <Link href="/">
              <Text
                fontWeight={400}
                fontSize={["18px", "18px", "22px"]}
                color="white"
                mb="20px"
              >
                Home
              </Text>
            </Link>

            <Link href="/how-it-works">
              <Text
                fontWeight={400}
                fontSize={["18px", "18px", "22px"]}
                color="white"
                mb="20px"
              >
                How it Works
              </Text>
            </Link>
            <Link href="/available-programs">
              <Text
                fontWeight={400}
                fontSize={["18px", "18px", "22px"]}
                color="white"
                mb="20px"
              >
                Available Programs
              </Text>
            </Link>
            <Link href="/about">
              <Text
                fontWeight={400}
                fontSize={["18px", "18px", "22px"]}
                color="white"
                mb="20px"
              >
                About
              </Text>
            </Link>
          </Box>
          <Box mx="4" my={["4", "4", "auto"]} w={["full", "45%", "auto"]}>
            <Heading
              color="#11AD8E"
              fontWeight={600}
              fontSize={["20px", "20px", "24px"]}
              mb="25px"
              textAlign="center"
            >
              Follow us
            </Heading>
            <Flex justifyContent="space-evenly">
              <LinkIcon cursor="pointer" mx="10px" color="#11AD8E" />
              <LinkIcon cursor="pointer" mx="10px" color="#11AD8E" />
              <LinkIcon cursor="pointer" mx="10px" color="#11AD8E" />
              <LinkIcon cursor="pointer" mx="10px" color="#11AD8E" />
              <LinkIcon cursor="pointer" mx="10px" color="#11AD8E" />
            </Flex>
          </Box>
          <Box mx="4" my={["4", "4", "auto"]} w={["full", "45%", "auto"]}>
            <form onSubmit={(e) => e.preventDefault()}>
              <Heading
                color="#11AD8E"
                fontWeight={600}
                fontSize={["20px", "20px", "24px"]}
              >
                Subscribe
              </Heading>

              <Input
                type="email"
                size="lg"
                placeholder="Email here"
                mt={["20px", "20px", "32px"]}
                mb="20px"
                bg="white"
                required
              />

              <Button
                type="submit"
                size="lg"
                bgColor="#11AD8E"
                colorScheme="#11AD8E"
                w={["full", "auto", "auto"]}
              >
                Subscribe
              </Button>
            </form>
          </Box>
        </Flex>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        borderTop="1px solid #11AD8E"
      >
        <Text
          fontWeight={400}
          fontSize={["12px", "12px", "18px"]}
          color="#11AD8E"
          my={["20px", "20px", "30px"]}
        >
          2023 Panaverse Dao. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};
