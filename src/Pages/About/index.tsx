import { Flex, VStack } from "@chakra-ui/react";
import { TechInfoCard } from "Components/TechInfoCard";
import PedroFlorencio from "../../assets/images/pedro-florencio.jpeg";
import PedroRabis from "../../assets/images/pedro-rabis.jpeg";
import Victor from "../../assets/images/victor.jpeg";
import { DeveloperCard } from "../../Components/DeveloperCard";
import { Header } from "../../Components/Header";
import { MdInfo } from "react-icons/md";

const About: React.FC = () => {
	return (
		<>
			<Flex
				direction="column"
			>

				<Header
					pageName="About"
					pageIcon={MdInfo}
				/>

				<Flex
					alignItems="center"
					justifyContent="space-evenly"
					// maxW="32rem"
					// minW="20rem"
					// maxH="12rem"
					// minH="8rem"
					bg="light.background"
					border="2px"
					borderColor="light.secondary"
					borderRadius="1.5rem"
					p="1rem"
					m="1rem"
				>

				<VStack
					spacing="1rem"
				>
					<DeveloperCard
						name="Pedro Florencio"
						githubProfile="PedroFlorencioNeto"
						description="Sou um estudante de Engenharia Elétrica apaixonado por Inteligência Artificial e seus impactos na sociedade."
						photo={PedroFlorencio}
					/>

					<DeveloperCard
						name="Pedro Rabis"
						githubProfile="rabispedro"
						description="Olá, meu nome é Pedro Rabis, sou apaixonado em novas tecnologias e estou trabalhando com Web utilizando as tecnologias: NodeJS, ReactJS e Spring Boot."
						photo={PedroRabis}

					/>

					<DeveloperCard
						name="Victor Ferrari"
						githubProfile="heelvictor"
						description="Estagiário na Arpia, estudante na Uniessa e craque no FIFA."
						photo={Victor}
					/>
				</VStack>

				<TechInfoCard />
				</Flex>
			</Flex>
		</>
	);
};

export { About };
