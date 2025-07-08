import { View } from 'react-native';

import { styles } from './sort-by-price-block.styles';
import { SortButton } from '../sort-button';
import { SortTypes } from '../../../../shared/types/common.types';

type SortByPriceBlock = {
	activeSortType: SortTypes;
	onAscPress: () => void;
	onDescPress: () => void;
};

export const SortByPriceBlock: React.FC<SortByPriceBlock> = ({
	activeSortType,
	onAscPress,
	onDescPress,
}) => {
	return (
		<View style={styles.container}>
			<SortButton
				text="ASC"
				sortType={SortTypes.ASC}
				onPress={onAscPress}
				activeSortType={activeSortType}
			/>
			<SortButton
				text="DESC"
				sortType={SortTypes.DESC}
				onPress={onDescPress}
				activeSortType={activeSortType}
			/>
		</View>
	);
};
