import { Flex, Text, Image, HStack } from "@chakra-ui/react";
import Arpia from "../../assets/images/arpia-logo.png";
import Chakra from "../../assets/icons/chakra.svg";
import Code from "../../assets/icons/code.svg";
import Github from "../../assets/icons/github.svg";
import NodeJs from "../../assets/icons/node-js.svg";
import React from "../../assets/icons/react.svg";
import Typescript from "../../assets/icons/typescript.svg";

const TechInfoCard: React.FC = () => {
	return (
		<>
			<Flex
				direction="column"
				alignItems="center"
				justifyContent="space-around"
				// maxW="32rem"
				// minW="20rem"
				maxH="40rem"
				h="34rem"
				minH="18rem"
				maxW="34rem"
				// minH="8rem"
				bg="light.background"
				border="2px"
				borderColor="light.secondary"
				borderRadius="1.5rem"
				p="2rem"

			>

				<Text
					fontSize="1.5rem"
					justifySelf="center"
					flexWrap="wrap"
					textAlign="center"
				>
					Este projeto foi desenvolvido durante o Programa de Aceleração Arpia.
				</Text>

				<Image
					src={Arpia}
					maxW="50%"
				/>

				<Text
					fontWeight="bold"
					fontSize="1.75rem"
				>
					Tecnologias utilizadas:
				</Text>

				<HStack
					spacing="1rem"
				>
					<Image
						src={Chakra}
						w="4rem"
						alt="Logo do Chakra UI"
					/>
					<Image
						src={Code}
						w="4rem"
						alt="Logo do Visual Studio Code"
					/>
					<Image
						src={Github}
						w="4rem"
						alt="Logo do Github"
					/>
					<Image
						src={NodeJs}
						w="4rem"
						alt="Logo do NodeJs"
					/>
					<Image
						src={React}
						w="4rem"
						alt="Logo do ReactJs"
					/>
					<Image
						src={Typescript}
						w="4rem"
						alt="Logo do Typescript"
					/>

				</HStack>

			</Flex>
		</>
	);
};

export { TechInfoCard };
