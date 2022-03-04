import { Header } from "../Components/Header";
// import { Footer } from "Components/Footer";
import { BrowserRouter } from "react-router-dom";
import { RinhaRoutes } from "../Routes/RinhaRoutes";
import { MdAccountCircle } from "react-icons/md";

const Template = () : JSX.Element => {
	return (
		<BrowserRouter>
			<Header pageIcon={MdAccountCircle} pageName="" />
			<RinhaRoutes />
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export { Template };
