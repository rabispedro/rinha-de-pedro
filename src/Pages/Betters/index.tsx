import {HStack,Flex, Accordion, AccordionButton, AccordionIcon} from "@chakra-ui/react";
import {AccordionItem, AccordionPanel, Box} from "@chakra-ui/react";

const Betters: React.FC = () => {
	return (
		<>
			<Flex>
				<HStack
				align='center'
				w='50%'
				px='0rem'
				h={['50px','500px']}
				justify='center'
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
