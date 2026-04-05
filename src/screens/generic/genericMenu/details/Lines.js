import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import { styleLines } from "../styles/styleLines";

export default function Lines() {
	const { t }  = useTranslation();

	return <>
		<View style={styleLines.container}>
			<Text style={styleLines.title}>{t('generic.genericMenu.menuPlaceholder')}</Text>
			<View style={styleLines.divider} />
		</View>
	</>
};