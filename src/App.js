import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Panel from "./components/Panel";

function App() {
  return (
    <Box as="div" bg="gray.800" w="100%" h="100vh">
      <Navbar />
      <Header />
      <Panel />
    </Box>
  );
}

export default App;
