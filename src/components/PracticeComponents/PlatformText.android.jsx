import { Platform, StyleSheet, Text } from 'react-native';
const styles = StyleSheet.create({
	text: {
		color: 'green',
		textAlign: 'center',
	},
});

const PlatformText = () => {
	return <Text style={styles.text}>{Platform.OS}</Text>;
};

export default PlatformText;
