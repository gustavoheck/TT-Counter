import React from "react";
import { DDozeStyles } from "../styles/DDozeStyles";

import D12 from '../images/D12.png';
import BotaoDado from "../../componentesGerais/BotaoDado";

export default function DDoze() {
	return <>
		<BotaoDado
			minDado={1}
			maxDado={12}
			imagemDado={D12}
			estiloBotao={DDozeStyles.button}
		/>
	</>
};