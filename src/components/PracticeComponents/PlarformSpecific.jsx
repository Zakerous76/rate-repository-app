import { Platform, StyleSheet, Text, View } from 'react-native';
import PlatformText from './PlatformText';
const styles = StyleSheet.create({
	text: {
		color:
			(Platform.OS === 'android' && 'green') ||
			(Platform.OS === 'ios' && 'blue') ||
			(Platform.OS === 'windows' && 'lightblue') ||
			(Platform.OS === 'web' && 'orange') ||
			(Platform.OS === 'macos' && 'teal'),
		textAlign: 'center',
	},
	textv2: {
		color: Platform.select({
			android: 'green',
			ios: 'black',
			web: 'red',
		}),
		textAlign: 'center',
	},
});

const PlarformSpecific = () => {
	return (
		<View>
			<Text style={styles.textv2}>{Platform.OS}</Text>
			<PlatformText />
		</View>
	);
};

export default PlarformSpecific;
