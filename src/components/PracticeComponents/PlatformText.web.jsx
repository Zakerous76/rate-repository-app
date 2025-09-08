import { Platform, StyleSheet, Text } from 'react-native';
const styles = StyleSheet.create({
	text: {
		color: 'orange',
		textAlign: 'center',
	},
});

const PlatformText = () => {
	return <Text style={styles.text}>{Platform.OS}</Text>;
};

export default PlatformText;
