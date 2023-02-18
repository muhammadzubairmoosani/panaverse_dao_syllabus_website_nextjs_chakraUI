"use client";
import {
  BellIcon,
  ChevronDownIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

export const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Button
        onClick={onOpen}
        as={IconButton}
        variant="outline"
        icon={<HamburgerIcon />}
        m={4}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <Divider />
          <DrawerBody>
            <Flex direction={"column"}>
              <Link href="/home">
                <Text
                  display="flex"
                  alignItems="center"
                  fontWeight={500}
                  h="12"
                  fontSize="18px"
                >
                  Home
                </Text>
              </Link>

              <Divider />

              <Link href="/home">
                <Text
                  display="flex"
                  alignItems="center"
                  fontWeight={500}
                  h="12"
                  fontSize="18px"
                >
                  About
                </Text>
              </Link>
              <Divider />

              <Link href="/available-programs">
                <Text
                  display="flex"
                  alignItems="center"
                  fontWeight={500}
                  h="12"
                  fontSize="18px"
                >
                  Available Programs
                </Text>
              </Link>

              <Divider />

              <Link href="/contact">
                <Text
                  display="flex"
                  alignItems="center"
                  fontWeight={500}
                  h="12"
                  fontSize="18px"
                >
                  Contact
                </Text>
              </Link>

              <Divider />

              <Flex
                justifyContent={"space-evenly"}
                alignItems="center"
                h="48px"
              >
                <BellIcon color="#11AD8E" fontSize={22} cursor="pointer" />
                <Divider colorScheme="#11AD8E" orientation="vertical" h="6" />
                {colorMode === "light" ? (
                  <MoonIcon
                    onClick={toggleColorMode}
                    color="#11AD8E"
                    fontSize={20}
                    cursor="pointer"
                  />
                ) : (
                  <SunIcon
                    onClick={toggleColorMode}
                    color="#11AD8E"
                    fontSize={22}
                    cursor="pointer"
                  />
                )}
              </Flex>
              <Divider />

              <Link href="https://portal.piaic.org/signup" target="_blank">
                <Button
                  w="full"
                  my="4"
                  size="md"
                  bg="#11AD8E"
                  colorScheme="#11AD8E"
                >
                  Apply Now
                </Button>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
