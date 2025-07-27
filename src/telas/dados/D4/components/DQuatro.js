import React from "react";
import { DQuatroStyles } from "../styles/DQuatroStyles";

import D4 from '../images/D4.png';
import BotaoDado from "../../componentesGerais/BotaoDado";

export default function DQuatro() {
	return <>
		<BotaoDado
			minDado={1}
			maxDado={4}
			imagemDado={D4}
			estiloBotao={DQuatroStyles.button}
			estiloNumero={DQuatroStyles.number}
		/>
	</>
};