import { Avatar, Flex, Link, Image, Spacer, Text } from "@chakra-ui/react";
import github from "../../assets/icons/github.svg";

interface DeveloperCardProps {
	name: string,
	githubProfile: string,
	description: string,
	photo: string
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ name, githubProfile, description, photo }) => {
	return (
		<>
			<Flex
				alignItems="center"
				justifyContent="center"
				maxW="32rem"
				minW="20rem"
				maxH="12rem"
				minH="8rem"
				bg="light.background"
				border="2px"
				borderColor="light.primary"
				borderRadius="1.5rem"
				p="1rem"
			>

			<Image
				src={photo}
				borderRadius="50%"
				width="5rem"
				height="5rem"
			/>

			<Flex
				direction="column"
				borderColor="light.secondary"
				p="1rem"
			>

				<Flex
					margin="0 0 1rem 0"
				>
					<Text
						color="light.text"
						>
						{name}
					</Text>
					<Spacer />
					<Avatar
						src={github}
						borderRadius="50%"
						width="1.5rem"
						height="1.5rem"
						margin="0 0.625rem 0 0"
					/>
					<Link
						color="light.text"
						href={"https://github.com/" + githubProfile}
						target="_blank"
						isExternal
					>
						@{githubProfile}
					</Link>
				</Flex>

				<Text color="light.text">
					{description}
				</Text>

				</Flex>
			</Flex>
		</>
	);
}

export { DeveloperCard };
