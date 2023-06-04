import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Home";
import Atv01 from "./Components/Atividade01-Aula08/Atv01";
import Atv02 from "./Components/Atividade02-Aula09/Atv02";
import Atv03 from "./Components/Atividade03-Aula10/Atv03";
import Atv04 from "./Components/Atividade04-Aula11/Atv04";
import Atv05 from "./Components/Atividade05-Aula12/Atv05";
import Atv06 from "./Components/Atividade06-Aula13/Atv06";
import Atv07 from './Components/Atividade07-Aula14/Atv07';

export default function MinhasRotas() {
	return (
		<BrowserRouter >
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Atv01" element={<Atv01 />} />
				<Route path="/Atv02" element={<Atv02 />} />
				<Route path="/Atv03" element={<Atv03 />} />
				<Route path="/Atv04" element={<Atv04 />} />
				<Route path="/Atv05" element={<Atv05 />} />
				<Route path="/Atv06" element={<Atv06 />} />
				<Route path="/Atv07" element={<Atv07 />} />
			</Routes>
		</BrowserRouter>
	);
}