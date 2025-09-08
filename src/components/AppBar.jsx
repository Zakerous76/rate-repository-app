import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	mainContainer: {
		paddingTop: Constants.statusBarHeight * 1.7 || 20,
		marginBottom: 20,
		paddingHorizontal: 20,
		paddingBottom: 20,
		backgroundColor: theme.colors.appBar,
		flexDirection: 'row',
	},
	scrollContainer: {
		flexDirection: 'row',
		gap: 20,
	},
});

const AppBar = () => {
	return (
		<View style={styles.mainContainer}>
			<ScrollView
				horizontal
				contentContainerStyle={styles.scrollContainer}
				showsHorizontalScrollIndicator={false}
			>
				<AppBarTab linkTo={'/'}>Repositories</AppBarTab>
				<AppBarTab linkTo={'/sign-in'}>Sign In</AppBarTab>
				<AppBarTab linkTo={'/bmi'}>BMI</AppBarTab>
			</ScrollView>
		</View>
	);
};

export default AppBar;
