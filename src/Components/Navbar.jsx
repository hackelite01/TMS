import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "./Typing.gif";

const Links = [
  { name: "Test Speed", id: "/testspeed" },
  { name: "Learning Tool", id: "/techniques" },
  { name: "Login", id: "/login" },
  { name: "SignUp", id: "/signup" },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const login = JSON.parse(localStorage.getItem("login"));
  const details = JSON.parse(localStorage.getItem("emaildetail"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} borderRadius={15}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to={"/"}>
                <Image w={40} src={logo} alt={logo} />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontWeight={700}
              fontSize={20}
              color="#577b87"
            >
              
                <Text _hover={{ bg: "#577b87", color: "white", p: 2, borderRadius: 10 }}>Test Speed</Text>
              
              <Link to={"/testspeed"}>
                <Button variant="outline" colorScheme="orange" _hover={{ bg: "orange.400" }}>Easy</Button>
              </Link>
              <Link to={"/test1"}>
                <Button variant="outline" colorScheme="orange" _hover={{ bg: "orange.400" }}>Medium</Button>
              </Link>
              <Link to={"/test2"}>
                <Button variant="outline" colorScheme="orange" _hover={{ bg: "orange.400" }}>Hard</Button>
              </Link>
              <Link to={"/techniques"}>
                <Text _hover={{ bg: "#577b87", color: "white", p: 2, borderRadius: 10 }}>Techniques</Text>
              </Link>
            </HStack>
          </HStack>
          {login ? (
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <Avatar size={"sm"} src={details?.user?.photoURL} />
                </MenuButton>
                <MenuList>
                  <Link to="/profile">
                    <MenuItem>Profile</MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <Box display={"flex"} w={{ base: "auto" }} gap={6} textAlign={"center"} color="#577b87">
              <Link to={"/login"}>
                <Text _hover={{ bg: "#577b87", color: "white", p: 2, borderRadius: 10 }} fontWeight={700} fontSize={20}>Login</Text>
              </Link>
            </Box>
          )}
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} fontWeight={700} fontSize={20}>
              {Links.map((link, i) => (
                <NavLink key={i} to={link.id} name={link.name} w="xm" textalign="center" onClick={() => onClose()} />
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}
