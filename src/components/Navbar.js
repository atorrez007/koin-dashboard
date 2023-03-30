import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="end" px="36px" pt="24px" bg="#845EC2">
      <Button
        color="black"
        boxShadow="box-shadow: 0px 10px 10px -5px #0000000A;
      box-shadow: 0px 20px 25px -5px #0000001A;"
        // _focus={{ background: "gray.800", color: "white" }}
        _hover={{ background: "gray.800", color: "white" }}
        _active={{ background: "pink.200" }}
      >
        Connect Wallet
      </Button>
    </Box>
  );
};

export default Navbar;
