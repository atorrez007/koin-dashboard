import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box as="div" bg="gray.800" w="100%" h="100vh">
      <Navbar />
      <Header />
    </Box>
  );
}

export default App;
