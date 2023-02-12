"use client";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import Link from "next/link";

export default function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                  fontWeight={500}
                  h="12"
                  fontSize={["18", "18", "24"]}
                  color="#ffffff"
                >
                  Home
                </Text>
              </Link>

              <Link href="/home">
                <Text
                  fontWeight={500}
                  h="12"
                  fontSize={["18", "18", "24"]}
                  color="#ffffff"
                >
                  About
                </Text>
              </Link>
              <Menu>
                <Text
                  fontWeight={500}
                  h="12"
                  fontSize={["18", "18", "24"]}
                  color="#ffffff"
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
                    Course 2
                  </MenuItem>
                  <MenuItem as="a" href="#">
                    Course 2
                  </MenuItem>
                </MenuList>
              </Menu>

              <Link href="/contact">
                <Text
                  fontWeight={500}
                  h="12"
                  fontSize={["18", "18", "24"]}
                  color="#ffffff"
                >
                  Contact
                </Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
