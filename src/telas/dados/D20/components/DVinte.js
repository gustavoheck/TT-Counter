import React from "react";
import { DVinteStyles } from "../styles/DVinteStyles";

import D20 from '../images/D20.png';
import BotaoDado from "../../componentesGerais/BotaoDado";

export default function DVinte() {
	return <>
		<BotaoDado
			minDado={1}
			maxDado={20}
			imagemDado={D20}
			estiloBotao={DVinteStyles.button}
		/>
	</>
};