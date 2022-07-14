import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Seo from "../components/seo";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Center as={"main"} bg={"primary.cream"} w={"full"} h={"100vh"} px={"5"}>
        <Box
          w={"full"}
          maxW={"xl"}
          bg={"white"}
          display={"flex"}
          h={{ base: "auto", md: "96" }}
          flexDirection={{ base: "column", md: "row" }}
          rounded={"2xl"}
          overflow={"hidden"}
        >
          <Container pos={"relative"} w={"full"} h={{ base: "64", md: "full" }}>
            <Image
              src="/images/image-product-desktop.jpg"
              alt="Product Preview"
              layout="fill"
              objectFit="cover"
            />
          </Container>
          <VStack
            px={{ base: 5, md: 7 }}
            py={{ base: 5, md: 10 }}
            spacing={7}
            w={{ base: "unset", md: "90%" }}
          >
            <VStack spacing={3} alignItems={"flex-start"}>
              <Text
                fontSize={{ base: "sm", md: "xs" }}
                color={"neutral.darkGrayishBlue"}
              >
                P E R F U M E
              </Text>
              <Heading as={"h1"} fontSize={"3xl"} fontWeight={"heading"}>
                Gabrielle Essence Eau De Parfum
              </Heading>
              <Text
                fontSize={"xs"}
                fontWeight={"normal"}
                color={"neutral.darkGrayishBlue"}
              >
                A floral, solar and voluptuous interpretation composed by Oliver
                Polge, Perfumer-Creator for the House of CHANEL
              </Text>
            </VStack>
            <Box w={"full"}>
              <Flex w={"full"} alignItems={"center"} gap={5}>
                <Heading as={"h2"} color={"primary.darkCyan"}>
                  $149.99
                </Heading>
                <Text
                  textDecor={"line-through"}
                  color={"neutral.darkGrayishBlue"}
                  fontSize={{ base: "unset", md: "xs" }}
                >
                  $169.99
                </Text>
              </Flex>
              <Button
                mt={2}
                size={"lg"}
                w={"full"}
                fontSize={"sm"}
                bg={"primary.darkCyan"}
                color={"white"}
                _hover={{ bg: "primary.darkHover" }}
                _active={{ bg: "primary.darkHover" }}
              >
                Add to cart
              </Button>
            </Box>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default Home;
