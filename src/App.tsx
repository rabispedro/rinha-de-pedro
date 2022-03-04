import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Template } from './Template';
import './App.css';
import { theme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <>
			<ChakraProvider theme={theme} >
			{/* <GlobalStyle /> */}
			<Template />
			</ChakraProvider>
		</>
  );
}

export default App;
