"use client";

import { BellIcon, ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { DrawerComponent } from "./Drawer";
// import { useRouter } from "next/router";

export const Navigation = () => {
  // const router = useRouter();
  const [isMediumOrSmallThan769] = useMediaQuery("(max-width: 769px)");
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <SimpleGrid
      position={"absolute"}
      w="full"
      zIndex={1}
      bg={
        "linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4);"
      }
      shadow="0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);"
      templateRows="repeat(1, 1fr)"
      gap={6}
      py={4}
      px={[0, 0, 8]}
    >
      <Flex justifyContent="space-between">
        <Flex justifyContent="center" mx={4} h="full" alignItems="center">
          <Image w={["24", "24", "28"]} src="logo.png" alt="Logo" />
        </Flex>

        {isMediumOrSmallThan769 ? (
          <GridItem>
            <DrawerComponent />
          </GridItem>
        ) : (
          <>
            <GridItem h="16" colSpan={3}>
              <Flex
                justifyContent={"space-evenly"}
                h="full"
                alignItems="center"
              >
                <Link href="/home">
                  <Text fontWeight={500} mx={4} fontSize="24" color="#ffffff">
                    Home
                  </Text>
                </Link>

                <Link href="/home">
                  <Text fontWeight={500} mx={4} fontSize="24" color="#ffffff">
                    About
                  </Text>
                </Link>
                <Menu>
                  <Text fontWeight={500} mx={4} fontSize="24" color="#ffffff">
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
                  <Text fontWeight={500} mx={4} fontSize="24" color="#ffffff">
                    Contact
                  </Text>
                </Link>
              </Flex>
            </GridItem>

            <GridItem h="16">
              <Flex
                justifyContent={"space-evenly"}
                alignItems="center"
                h="full"
              >
                <BellIcon color="white" fontSize={22} cursor="pointer" />
                <Divider color={"white"} mx={4} orientation="vertical" h="6" />
                {colorMode === "light" ? (
                  <MoonIcon
                    onClick={toggleColorMode}
                    color="white"
                    fontSize={20}
                    cursor="pointer"
                  />
                ) : (
                  <SunIcon
                    onClick={toggleColorMode}
                    color="white"
                    fontSize={22}
                    cursor="pointer"
                  />
                )}
                <Link href="https://portal.piaic.org/signup" target="_blank">
                  <Button mx={4} size="lg" colorScheme="blue">
                    Apply Now
                  </Button>
                </Link>
              </Flex>
            </GridItem>
          </>
        )}
      </Flex>
    </SimpleGrid>
  );
};
