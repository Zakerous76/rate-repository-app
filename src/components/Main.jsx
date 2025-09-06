import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Learning from './Learning';
import AppBar from './AppBar';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />
			<RepositoryList />
		</View>
	);
};

export default Main;
