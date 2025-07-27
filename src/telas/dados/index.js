import React from 'react';
import { View } from 'react-native';

import DSeis from './D6/components/DSeis';
import DVinte from './D20/components/DVinte';
import DQuatro from './D4/components/DQuatro';
import DOito from './D8/components/DOito';
import DDez from './D10/components/DDez';
import DDoze from './D12/components/DDoze';

import Return from '../../globalComponents/return';

import Details from './details';

export default function Dados() {
	return <>
		<View style={{ flex: 1, backgroundColor: "grey" }}>
			<Details />
			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
				<DSeis />
			</View>
			<Return />

			<DVinte />
			<DDoze />
			<DOito />
			<DQuatro />
			<DDez />
		</View>
	</>
};