import { Flex, Text, VStack } from "@chakra-ui/react";
import { DeveloperCard } from "../../Components/DeveloperCard";
import { Header } from "../../Components/Header";


const About: React.FC = () => {
	return (
		<>
			<Flex
				direction="column"
			>

				<Header />

				<VStack>
					<Text>teste</ Text>
					<DeveloperCard />
					<Text>teste</ Text>
					<DeveloperCard />
					<Text>teste</ Text>
					<DeveloperCard />
				</ VStack>
			</Flex>
		</>
	);
};

export { About };
