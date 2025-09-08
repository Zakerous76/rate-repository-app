import { StyleSheet, View } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
	flexContainer: {
		display: 'flex',
	},
	flexItemA: {
		flexGrow: 0,
		backgroundColor: 'green',
	},
	flexItemB: {
		flexGrow: 1,
		backgroundColor: 'blue',
	},
});

const FlexboxExample = () => {
	return (
		<View style={styles.flexContainer}>
			<View style={styles.flexItemA}>
				<Text>ItemA</Text>
			</View>
			<View style={styles.flexItemB}>
				<Text>ItemB</Text>
			</View>
		</View>
	);
};

export default FlexboxExample;
