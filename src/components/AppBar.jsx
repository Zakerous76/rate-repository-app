import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight * 1.5 || 20,
		marginBottom: 20,
		paddingHorizontal: 20,
		paddingBottom: 20,
		backgroundColor: theme.colors.appBar,
		flexDirection: 'row',
		gap: 10,
		// ...
	},
	// ...
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab>Repositories</AppBarTab>
		</View>
	);
};

export default AppBar;
