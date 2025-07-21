import React from "react";
import {DDezStyles} from "../styles/DDezStyles";

import D10 from '../images/D10.png'
import BotaoDado from "../../componentesGerais/BotaoDado";

export default function DDez() {
  return <>
    <BotaoDado
      minDado={1}
      maxDado={10}
      imagemDado={D10}
      estiloBotao={DDezStyles.button}
      estiloNumero={DDezStyles.number}
    />
  </>
};