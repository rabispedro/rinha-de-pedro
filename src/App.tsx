import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import { About } from './Pages/About';
import { theme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <>
			<ChakraProvider theme={theme} >

			<About />

			</ChakraProvider>
		</>
  );
}

export default App;
