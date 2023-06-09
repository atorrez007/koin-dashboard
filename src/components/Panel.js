import React, { useState } from "react";
import {
  Box,
  Divider,
  HStack,
  Text,
  Image,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Panel = () => {
  const [isLoading, setIsLoading] = useState(false);

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
      <Box
        // bg="orange"
        w="auto"
        bg="white"
        m="24px"
        pt="12px"
        mr="12px"
      >
        <Box>
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
      </Box>

      <Divider w="auto" mx="96px" borderColor={"gray.600"} />
      {/* <Box
        bg="red"
        style={{
          // display: "block",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          // marginRight: "10px",

          // background: "orange",
        }}
      >
        <Box
          as="span"
          dangerouslySetInnerHTML={{ __html: identicon }}
          style={{
            // display: "block",
            width: "25px",
            height: "25px",
          }}
        ></Box>
      </Box> */}

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
            {isLoading ? (
              <Box display="flex" justifyContent="center">
                <Spinner color="purple.900" size="lg" speed="0.70s" />
              </Box>
            ) : (
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
            )}
          </Box>
        </HStack>
      </Box>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={5}
        maxW="90%"
        justifyItems="center"
        alignItems="center"
        mx="auto"
      >
        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <Spinner color="purple.900" size="lg" speed="0.70s" />
          </Box>
        ) : (
          <GridItem w="100%" h="100%" bg="white" display="flex" border="black">
            <Box
              mx="auto"
              border="1px"
              borderColor="gray.500"
              boxShadow="lg"
              p="6"
              rounded="md"
              bg="white"
              w="100%"
            >
              <Text>Test</Text>
            </Box>
          </GridItem>
        )}
        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <Spinner color="purple.900" size="lg" speed="0.70s" />
          </Box>
        ) : (
          <GridItem w="100%" h="100%" bg="white" display="flex" border="black">
            <Box
              mx="auto"
              border="1px"
              borderColor="gray.500"
              boxShadow="lg"
              p="6"
              rounded="md"
              bg="white"
              w="100%"
            >
              <Text>Test</Text>
            </Box>
          </GridItem>
        )}
        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <Spinner color="purple.900" size="lg" speed="0.70s" />
          </Box>
        ) : (
          <GridItem w="100%" h="100%" bg="white" display="flex" border="black">
            <Box
              mx="auto"
              border="1px"
              borderColor="gray.500"
              boxShadow="lg"
              p="6"
              rounded="md"
              bg="white"
              w="100%"
            >
              <Text>Test</Text>
            </Box>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
};

export default Panel;
