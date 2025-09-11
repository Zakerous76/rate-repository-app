import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import useAuthStorage from '../hooks/useAuthStorage';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { ME_QUERY } from '../graphql/queries';

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
	const [user, setUser] = useState();
	const { loading, error, data } = useQuery(ME_QUERY);
	console.log('data:', data);

	useEffect(() => {
		if (data) {
			setUser(data);
		}
	}, [loading]);

	return (
		<View style={styles.mainContainer}>
			<ScrollView
				horizontal
				contentContainerStyle={styles.scrollContainer}
				showsHorizontalScrollIndicator={false}
			>
				<AppBarTab linkTo={'/'}>Repositories</AppBarTab>

				{!user && <AppBarTab linkTo={'/sign-in'}>Sign In</AppBarTab>}
				{user && <AppBarTab linkTo={'/sign-out'}>Sign Out</AppBarTab>}

				<AppBarTab linkTo={'/bmi'}>BMI</AppBarTab>
			</ScrollView>
		</View>
	);
};

export default AppBar;
