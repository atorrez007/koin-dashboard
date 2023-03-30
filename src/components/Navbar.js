import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="end" px="36px" pt="24px" bg="#845EC2">
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
    </Box>
  );
};

export default Navbar;
