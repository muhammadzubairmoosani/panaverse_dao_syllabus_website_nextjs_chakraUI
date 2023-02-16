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
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Divider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

export default function DrawerComponent() {
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

              <Menu>
                <Text
                  display="flex"
                  alignItems="center"
                  fontWeight={500}
                  h="12"
                  fontSize="18px"
                >
                  <MenuButton>
                    Courses <ChevronDownIcon />
                  </MenuButton>
                </Text>
                <MenuList>
                  <MenuItem as="a" href="#">
                    Course 1
                  </MenuItem>
                  <MenuItem as="a" href="#">
                    Course 2
                  </MenuItem>
                  <MenuItem as="a" href="#">
                    Course 3
                  </MenuItem>
                  <MenuItem as="a" href="#">
                    Course 4
                  </MenuItem>
                </MenuList>
              </Menu>
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

              <Button
                mx={4}
                my="4"
                size="md"
                bg="#11AD8E"
                colorScheme="#11AD8E"
              >
                Apply Now
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
