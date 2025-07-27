import { DOitoStyles } from "../styles/DOitoStyles";

import D8 from '../images/D8.png';
import BotaoDado from "../../componentesGerais/BotaoDado";

export default function DOito() {
	return <>
		<BotaoDado
			minDado={1}
			maxDado={8}
			imagemDado={D8}
			estiloBotao={DOitoStyles.button}
			estiloNumero={DOitoStyles.number}
		/>
	</>
};