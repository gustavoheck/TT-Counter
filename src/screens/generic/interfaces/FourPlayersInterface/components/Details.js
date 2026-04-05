import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import { styleDetails } from "../styles/styleDetails";



export default function Details() {
	const { t } = useTranslation();

	return <>
		<Text style={styleDetails.title}>{t('generic.genericDefault.title')}</Text>

		<View style={styleDetails.verticalDividerBlack} />

		<View style={styleDetails.horizontalDividerBlack} />
	</>
};