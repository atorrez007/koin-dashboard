import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Panel = () => {
  return (
    <Box
      maxW="90%"
      h="75%"
      //Switch to white later
      bg="gray.600"
      borderRadius="4px"
      margin="auto"
      mt="-360px"
      boxShadow="box-shadow: 0px 10px 10px -5px #0000000A;
      box-shadow: 0px 20px 25px -5px #0000001A;
      "
    >
      <HStack>
        <Box w="auto" bg="white" m="12px" p="24px" borderRadius="2px">
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
      <Box
        w="auto"
        bg="white"
        m="12px"
        p="24px"
        borderRadius="2px"
        display="flex"
      >
        <HStack>
          <Box>
            <Text>Test</Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Panel;
