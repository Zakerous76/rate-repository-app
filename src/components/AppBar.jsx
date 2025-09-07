import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight * 1.7 || 20,
		marginBottom: 20,
		paddingHorizontal: 20,
		paddingBottom: 20,
		backgroundColor: theme.colors.appBar,
		flexDirection: 'row',
		justifyContent: 'space-between',
		// ...
	},
	// ...
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab linkTo={'/'}>Repositories</AppBarTab>
			<AppBarTab linkTo={'/sign-in'}>Sign In</AppBarTab>
		</View>
	);
};

export default AppBar;
