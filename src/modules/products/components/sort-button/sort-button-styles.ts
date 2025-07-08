import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../../shared/styles';

export const styles = StyleSheet.create({
	activeBtn: {
		backgroundColor: COLORS.blueberry,
		borderColor: COLORS.transparent,
	},
	activeBtnText: {
		color: COLORS.white,
	},
	button: {
		width: 50,
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: COLORS.sonic_silver,
		backgroundColor: COLORS.transparent,
	},
	buttonText: {
		fontFamily: FONTS.PoppinsMedium,
		fontSize: 14,
		lineHeight: 18,
		color: COLORS.black,
	},
});
