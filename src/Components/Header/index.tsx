import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";
import Logo from "../../assets/icons/logo.svg";
import { ThemeSwitcher } from "../ThemeSwitcher";

const Header: React.FC = () => {
	return (
		<>
			<Flex
				alignItems="center"
				justifyContent="space-between"
				p="0.75rem"
				bg="light.gray"
				as="header"
				w="100%"
				h={["60px", "80px"]}
			>

				<Image
					src={Logo}
					alt="Rinha de Pedro"
					boxSize="14rem"
				/>
				{/* <Icon  src={MdAccountCircle} /> */}
				<HStack>
					<MdAccountCircle />
					<Text>Testo de teste</Text>
				</HStack>
				<HStack
					alignItems="center"
					justifyContent="space-between"

					spacing="4"
				>
					<ThemeSwitcher />
				</HStack>
			</Flex>
		</>
	);
};

export { Header };

