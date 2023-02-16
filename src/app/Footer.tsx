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
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgImage={"main_bg.png"}
      bgSize="cover"
      py={["64px"]}
    >
      <Flex
        w="full"
        justifyContent="space-evenly"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <Box mx="4" my={["4", "4", "auto"]} w={["full", "45%", "auto"]}>
          <Image src="logo.png" alt="Dao logo" />
          <Text
            fontWeight={400}
            fontSize="18px"
            color="white"
            mt="33px"
            mb="21px"
          >
            <EmailIcon color="#11AD8E" mr="15px" />
            Plot 245/2 M, PECHS Block 6, Karachi
          </Text>
          <Text fontWeight={400} fontSize="18px" color="white">
            <PhoneIcon color="#11AD8E" mr="15px" />
            +92-308-2220203
          </Text>
        </Box>
        <Box mx="4" my={["4", "4", "auto"]} w={["full", "45%", "auto"]}>
          <Link href="/home">
            <Text fontWeight={400} fontSize="22px" color="white" mb="20px">
              Home
            </Text>
          </Link>

          <Link href="/home">
            <Text fontWeight={400} fontSize="22px" color="white" mb="20px">
              About
            </Text>
          </Link>
          <Link href="/home">
            <Text fontWeight={400} fontSize="22px" color="white" mb="20px">
              Caurses
            </Text>
          </Link>
          <Link href="/home">
            <Text fontWeight={400} fontSize="22px" color="white">
              Contact
            </Text>
          </Link>
        </Box>
        <Box mx="4" my={["4", "4", "auto"]} w={["full", "45%", "auto"]}>
          <Heading
            color="#11AD8E"
            fontWeight={600}
            fontSize="24px"
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
            <Heading color="#11AD8E" fontWeight={600} fontSize="24px">
              Subscribe
            </Heading>

            <Input
              type="email"
              size="lg"
              maxW="312px"
              placeholder="Email here"
              mt="32px"
              mb="20px"
              bg="white"
              required
            />

            <Button
              type="submit"
              size="lg"
              bgColor="#11AD8E"
              colorScheme="#11AD8E"
            >
              Subscribe
            </Button>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};