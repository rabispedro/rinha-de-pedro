import { About } from "../../Pages/About";
import { Route, Routes } from "react-router-dom";
import { Betters } from "../../Pages/Betters";
import { Home } from "../../Pages/Home";

const RinhaRoutes: React.FC = () => {
	return (
		<>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route caseSensitive path="/betters" element={<Betters />} />
			<Route caseSensitive path="/about" element={<About />} />
		</Routes>
		</>
	);
};

export { RinhaRoutes };
