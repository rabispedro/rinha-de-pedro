import Background from "../../assets/images/background.png";
import { Text, Flex, Heading } from "@chakra-ui/react";

const Home: React.FC = () => {
	return (
		<>
			<Flex
				direction="column"
				alignItems="center"
				justifyContent="space-evenly"
				w="100%"
				h="100%"
				p="2rem"
				bgImage={Background}
				borderRadius="1.3rem"
				bgRepeat="no-repeat"
				bgPosition="center"
				bgSize="cover"
			>
				<Heading
					fontSize={["1rem", "4rem"]}
				>
					Rinha de Pedros
				</Heading>

				<Text
					fontSize={["0.75rem", "2rem"]}
				>
					Cadastro de apostadores
				</Text>
			</Flex>
		</>
	);
};

export { Home };
