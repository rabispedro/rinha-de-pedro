import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { BrowserRouter } from "react-router-dom";
import { RinhaRoutes } from "../Routes/RinhaRoutes";
import { MdAccountCircle } from "react-icons/md";
import { Flex } from "@chakra-ui/react";

const Template = () : JSX.Element => {
	return (
		<BrowserRouter>
			<Header pageIcon={MdAccountCircle} pageName="" />
			<Flex
				direction="column"
				justifyContent="space-evenly"
				h={["20rem", "40rem"]}
				border="2px"
				borderColor="light.secondary"
				borderRadius="1.5rem"
				m="1rem"
			>
				<RinhaRoutes />
			</Flex>
			<Footer />
		</BrowserRouter>
	);
}

export { Template };
