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
				<AppBarTab linkTo={'RepositoryList'}>Repositories</AppBarTab>

				{!user?.me && <AppBarTab linkTo={'SignIn'}>Sign In</AppBarTab>}
				{user?.me && <AppBarTab linkTo={'SignOut'}>Sign Out</AppBarTab>}

				<AppBarTab linkTo={'BMI'}>BMI</AppBarTab>
			</ScrollView>
		</View>
	);
};

export default AppBar;
