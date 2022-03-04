import {HStack,Flex, Accordion, AccordionButton, Heading, AccordionIcon} from "@chakra-ui/react";
import {AccordionItem, AccordionPanel, Box} from "@chakra-ui/react";

interface BettersProps {
	betters: Better[]
}

interface Better {
	id: number,
	name: string,
	email: string,
	phone: string,
	stacks: Stack[]
}

interface Stack {
	language: string,
	framework: string
}

const Betters: React.FC<BettersProps> = ({ betters }) => {
	// CRUD
	// betters.map(obj => {
	// 	return (
	// 		<>
	// 			<Text>{obj.id}</Text>
	// 			<Text>{obj.name}</Text>
	// 			<Text>{obj.email}</Text>
	// 			<Text>{obj.phone}</Text>

	// 			{obj.stacks.map(currentStack => {
	// 				return (
	// 					<>
	// 					<Text>{currentStack.language}</Text>
	// 					</>
	// 				);
	// 			})}

	// 			{obj.stacks.map(currentStack => {
	// 				return (
	// 					<>
	// 					<Text>{currentStack.framework}</Text>
	// 					</>
	// 				);
	// 			})}

	// 		</>
	// 	);
	// })

	return (
		<>
			<Flex
				alignItems="center"
				justifyContent="center"
				direction="column"
				// bg="light.background"
				// border="2px"
				// borderColor="light.secondary"
			>
				<Heading>Betters</Heading>
				<HStack
					w='50%'
					px='0rem'
					h={['50px','500px']}
					justifyContent='center'
				>
					<Accordion>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex='1' textAlign='left'>
										Pedro Florencio
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								ID: 01 | Email: pedroflorencio@alu.ufc.br | Phone: 99999-9999 | Languages: Python | Frameworks: Scikit-learn
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex='1' textAlign='left'>
										Victor Ferrari
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								ID: 02 | Email: victorferrari@arpiatecnologia.com.br | Phone: 99999-9999 | Languages: JavaScript | Frameworks: React
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex='1' textAlign='left'>
										Pedro Henrique
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								ID: 03 | Email: pedrohenrique@arpiatecnologia.com.br | Phone: 99999-9999 | Languages: TypeScript | Frameworks: React
							</AccordionPanel>
						</AccordionItem>

					</Accordion>
				</HStack>
			</Flex>
		</>
	);
};

export { Betters };
