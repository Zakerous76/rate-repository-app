import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import BMI from './PracticeComponents/BMI';
import SignOut from './SignOut';
import RepositoryView from './RepositoryView';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.backgroundColor,
	},
});

const Stack = createNativeStackNavigator();

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{/* Home View */}
				<Stack.Screen
					name='RepositoryList'
					component={RepositoryList}
				/>
				<Stack.Screen
					name='SignIn'
					component={SignIn}
				/>
				<Stack.Screen
					name='SignOut'
					component={SignOut}
				/>
				<Stack.Screen
					name='BMI'
					component={BMI}
				/>
				<Stack.Screen
					name='RepositoryView'
					component={RepositoryView}
					options={{ animation: 'slide_from_right' }}
				/>
				{/* Catching all other Stack.Screens => Stack.Screend to home */}
			</Stack.Navigator>
		</View>
	);
};

export default Main;
