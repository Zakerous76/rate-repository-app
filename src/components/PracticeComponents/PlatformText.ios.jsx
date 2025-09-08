import { Platform, StyleSheet, Text } from 'react-native';
const styles = StyleSheet.create({
	text: {
		color: 'blue',
		textAlign: 'center',
	},
});

const PlatformText = () => {
	return <Text style={styles.text}>{Platform.OS}</Text>;
};

export default PlatformText;
