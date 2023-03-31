import { Box, Divider, HStack, Text, Image, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";

const Panel = () => {
  const [balance, setBalance] = useState("");
  return (
    <Box
      maxW="80%"
      h="75%"
      //Switch to white later
      // bg="gray.600"
      bg="white"
      borderRadius="4px"
      margin="auto"
      mt="-345px"
      boxShadow="box-shadow: 0px 0px 0px 5px #0000000A;
      box-shadow: 0px 5px 20px 25px #0000001A;
      "
    >
      <HStack>
        <Box w="auto" bg="white" m="24px" p="24px" borderRadius="2px">
          <Text
            display="flex"
            justifyContent="center"
            color="black"
            fontSize="2xl"
            fontWeight="medium"
          >
            Hello, User
          </Text>
        </Box>
      </HStack>
      <Divider w="auto" mx="96px" borderColor={"gray.600"} />
      <Box
        w="auto"
        bg="white"
        m="24px"
        p="24px"
        borderRadius="2px"
        display="flex"
      >
        <HStack>
          <Box w="auto">
            <Box display="flex" justifyContent="center">
              <Text
                fontSize="sm"
                color="gray.500"
                mb="3"
                ml="2"
                justifyContent="center"
              >
                My Balance
              </Text>
            </Box>

            {balance ? (
              <Box display="flex" justifyContent="center">
                <Image
                  src="https://etherscan.io/token/images/koinos_128.png?v=3public/koinos_32.png"
                  w="32px"
                  mr="2"
                  alt="koinos-logo"
                ></Image>
                <Text fontSize="xl" fontWeight="medium">
                  1,000 Koin
                </Text>
              </Box>
            ) : (
              <Box display="flex" justifyContent="center">
                <Spinner color="purple.900" size="lg" speed="0.70s" />
              </Box>
            )}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Panel;
