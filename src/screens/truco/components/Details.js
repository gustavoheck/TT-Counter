import { View, Text } from "react-native";

import { styleDetails } from "../styles/styleDetails";
import { useTranslation } from "react-i18next";

export default function Details() {
	const { t } = useTranslation();

	return <>

		<Text style={styleDetails.title}>{t('mainMenu.trucoPlaceholder')}</Text>

		<View style={styleDetails.midVerticalLine} />

		<View style={styleDetails.winsHorizontalLine} />

		<View style={styleDetails.titleHorizontalLine} />
	</>
};