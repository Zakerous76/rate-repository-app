import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Learning from './PracticeComponents/Learning';
import AppBar from './AppBar';
import theme from '../theme';
import { Navigate, Route, Routes } from 'react-router-native';
import SignIn from './SignIn';
import BMI from './PracticeComponents/BMI';
import SignOut from './SignOut';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.backgroundColor,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />
			<Routes>
				{/* Home View */}
				<Route
					path='/'
					element={<RepositoryList />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn />}
				/>
				<Route
					path='/sign-out'
					element={<SignOut />}
				/>
				<Route
					path='/bmi'
					element={<BMI />}
				/>
				{/* Catching all other routes => routed to home */}
				<Route
					path='*'
					element={
						<Navigate
							to='/'
							replace
						/>
					}
				/>
			</Routes>
		</View>
	);
};

export default Main;
