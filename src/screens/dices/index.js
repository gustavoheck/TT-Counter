import { View } from 'react-native';

import D4 from './D4/components/D4';
import D6 from './D6/components/D6';
import D8 from './D8/components/D8';
import D10 from './D10/components/D10';
import D12 from './D12/components/D12';
import D20 from './D20/components/D20';

import ReturnButton from '../../globalComponents/ReturnButton';

import Details from './Details';

import { styleMain } from './styles/styleMain';

export default function Dices() {
	return <>
		<View style={styleMain.mainContainer}>
			<ReturnButton/>
			<Details/>
			<View style={styleMain.centralizerContainer}>
				<View style={styleMain.dicesContainer}>
					<View style={styleMain.topDicesContainer}>
						<D20/>
						<D12/>
					</View>
					<View style={styleMain.d6Container}>
						<D6/>
					</View>
					<View style={styleMain.bottomDicesContainer}>
						<D8/>
						<D10/>
						<D4/>
					</View>
				</View>
			</View>
		</View>
	</>
};