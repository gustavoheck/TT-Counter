import { View } from 'react-native';

import D4 from './D4/components/D4';
import D6 from './D6/components/D6';
import D8 from './D8/components/D8';
import D10 from './D10/components/D10';
import D12 from './D12/components/D12';
import D20 from './D20/components/D20';

import ReturnButton from '../../globalComponents/ReturnButton';

import Details from './Details';

export default function Dices() {
	return <>
		<View style={{ flex: 1, backgroundColor: "grey" }}>
			<Details/>
			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
				<D6/>
			</View>
			<ReturnButton/>

			<D20/>
			<D12/>
			<D8/>
			<D4/>
			<D10/>
		</View>
	</>
};