import { HStack, Text } from "@chakra-ui/react"
import { FcLike } from "react-icons/fc";

const Footer: React.FC = () => {
	return (
		<>
			<HStack
			bg='grey'
			w='100%'
			as='footer'
			mx='auto'
			px='4rem'
			h={['60px','80px']}
			justifyContent='center'
			spacing='0.3rem'
			>
			<Text fontSize='1rem' >
				Desenvolvido com
			</Text>
			<FcLike />
			<Text fontSize='1rem'>
				por Pedro Florencio, Pedro Rabis e Victor Ferrari
			</Text>

			</HStack>
		</>
	)
}

export { Footer };
