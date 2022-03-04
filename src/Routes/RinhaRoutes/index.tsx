import { About } from "../../Pages/About";
import { Route, Routes } from "react-router-dom";


const RinhaRoutes: React.FC = () => {
	return (
		<>
		<Routes>
			{/* <Route path="/home" element={<Home>} /> */}
			{/* <Route caseSensitive path="/betters" element={<Better />} /> */}
			<Route caseSensitive path="/about" element={<About />} />
		</Routes>
		</>
	);
};

export { RinhaRoutes };
