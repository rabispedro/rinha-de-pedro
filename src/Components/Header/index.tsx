import { Flex, HStack, Icon, Image, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Logo from "../../assets/icons/logo.svg";
import { ThemeSwitcher } from "../ThemeSwitcher";

interface HeaderProps {
	pageName: string,
	pageIcon: IconType
}

const Header: React.FC<HeaderProps> = ({ pageName, pageIcon }) => {
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
					// boxSize="14rem"
					h="100%"
					w="auto"
				/>
				<HStack
					spacing="1rem"
				>
					<Icon
						as={pageIcon}
						w="2rem"
						h="2rem"
						borderRadius="50%"
					/>
					<Text
						fontSize="1.5rem"
					>{pageName}</Text>
				</HStack>
				<HStack
					alignItems="center"
					justifyContent="space-between"

					spacing="1rem"
				>
					<Link>Home</Link>
					<Link>Betters</Link>
					<Link>About</Link>
					<ThemeSwitcher />
				</HStack>
			</Flex>
		</>
	);
};

export { Header };

