import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight || 20,
		flexGrow: 1,
		flexShrink: 1,
		marginHorizontal: 20,
	},
});

const Main = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<RepositoryList />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default Main;
