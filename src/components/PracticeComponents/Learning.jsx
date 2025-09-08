import { StyleSheet, Text as NativeText } from 'react-native';
import Text from '../Text';
import FlexboxExample from './FlexboxExample';

const styles = StyleSheet.create({
	text: {
		color: 'grey',
		fontSize: 14,
	},
	blueText: {
		color: 'blue',
	},
	bigText: {
		fontSize: 24,
		fontWeight: '700',
	},
});

const FancyText = ({ isBlue, isBig, children, style }) => {
	const textStyles = [
		styles.text,
		isBig && styles.bigText,
		isBlue && styles.blueText,
		style,
	];
	return <NativeText style={textStyles}>{children}</NativeText>;
};

const Learning = () => {
	return (
		<>
			<Text fontSize='heading'>Learning Section</Text>
			<Text>Simple text</Text>
			<Text>Text with custom style</Text>
			<Text
				fontWeight='bold'
				fontSize='subheading'
			>
				Bold subheading
			</Text>
			<Text color='textSecondary'>Text with secondary color</Text>
			<FancyText>Simple Text</FancyText>
			<FancyText isBlue>Blue Text</FancyText>
			<FancyText isBig>Big Text</FancyText>
			<FancyText
				isBlue
				isBig
				style={{ marginBottom: 20 }}
			>
				Big Blue Text
			</FancyText>
			<FlexboxExample />
		</>
	);
};

export default Learning;
