import * as React from 'react';

import { Button } from '../../../../shared/components/button';
import { SortTypes } from 'src/shared/types/common.types';
import { styles } from './sort-button-styles';

type SortButton = {
	text: string;
	onPress: () => void;
	sortType: SortTypes;
	activeSortType: SortTypes;
};

export const SortButton: React.FC<SortButton> = ({
	text,
	onPress,
	activeSortType,
	sortType,
}) => {
	return (
		<Button
			text={text}
			onPress={onPress}
			extraBtnStyles={[
				styles.button,
				activeSortType === sortType && styles.activeBtn,
			]}
			extraTextStyles={[
				styles.buttonText,
				activeSortType === sortType && styles.activeBtnText,
			]}
		/>
	);
};
