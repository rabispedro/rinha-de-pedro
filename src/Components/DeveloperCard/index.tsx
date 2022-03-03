import { Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
import github from "../../assets/icons/github.svg";

const DeveloperCard: React.FC = () => {


	return (
		<>
			<Flex
				maxW="32rem"
				minW="20rem"
				maxH="10rem"
				minH="8rem"
				bg="light.background"
				border="2px"
				borderColor="light.primary"
				borderRadius="1.5rem"

			>
				<Flex>
					<Text
						color="light.text"
						>
						Name Placeholder
					</Text>
					<Spacer />
					<Image
						src={github}
						borderRadius="50%"
						width="1.5rem"
						height="1.5rem"
					/>
					<Link
						color="light.text"
						target="_blank"
						>
						@linkplaceholder
					</Link>
				</Flex>

			</ Flex>
		</>
	);
}

export { DeveloperCard };
