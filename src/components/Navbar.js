import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { createAvatar } from "@dicebear/core";
import * as identiconStyle from "@dicebear/avatars-identicon-sprites";

const Navbar = () => {
  const [defaultAccount, setDefaultAccount] = useState("");

  const identicon = createAvatar(identiconStyle, { seed: defaultAccount });
  return (
    <Box display="flex" justifyContent="end" px="36px" pt="24px" bg="#845EC2">
      {defaultAccount ? (
        <Box display="flex">
          <Button
            mr="20px"
            mt="10px"
            color="black"
            boxShadow="lg"
            bg="white"
            // _focus={{ background: "gray.800", color: "white" }}
            _hover={{ background: "gray.800", color: "white" }}
            _active={{ background: "green.200", color: "black" }}
          >
            Disconnect
          </Button>
          <Box
            w="65px"
            h="65px"
            borderRadius="50%"
            border="2px solid gray"
            bg="purple.200"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              dangerouslySetInnerHTML={{ __html: identicon }}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            ></Box>
          </Box>
        </Box>
      ) : (
        <Button
          color="black"
          boxShadow="lg"
          bg="white"
          // _focus={{ background: "gray.800", color: "white" }}
          _hover={{ background: "gray.800", color: "white" }}
          _active={{ background: "green.200", color: "black" }}
        >
          Connect Wallet
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
