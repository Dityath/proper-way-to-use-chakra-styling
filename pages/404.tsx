import { Center, Divider, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const Custom404: NextPage = () => {
  return (
    <Center as={"main"} bg={"primary.cream"} w={"full"} h={"100vh"} px={"5"}>
      <Heading color={"primary.darkCyan"} as={"h1"}>
        Page Not Found
      </Heading>
    </Center>
  );
};

export default Custom404;
