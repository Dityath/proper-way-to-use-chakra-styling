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
  HStack,
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
          maxW={"2xl"}
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
            py={{ base: 5, md: 8 }}
            spacing={7}
            w={{ base: "unset", md: "90%" }}
            justifyContent={{ base: "center", md: "space-between" }}
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
                bg={"primary.darkCyan"}
                color={"white"}
                _hover={{ bg: "primary.darkHover" }}
                _active={{ bg: "primary.darkHover" }}
              >
                <HStack>
                  <svg
                    width="15"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                      fill="#FFF"
                    />
                  </svg>
                  <Text fontSize={"sm"}>Add to cart</Text>
                </HStack>
              </Button>
            </Box>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default Home;
