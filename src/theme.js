import { Platform } from 'react-native';

const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: '#586069',
		primary: '#0366d6',
		appBar: '#24292e',
		white: '#fff',
		black: '#000',
		backgroundColor: '#e1e4e8',
	},
	fontSizes: {
		body: 14,
		subheading: 20,
		heading: 24,
	},
	fonts: {
		main:
			Platform.OS === 'android'
				? 'Roboto'
				: Platform.OS === 'ios'
				? 'Arial'
				: 'System',
	},
	fontWeights: {
		normal: '400',
		bold: '700',
	},
	button: {
		primary: {
			touchableOpacity: {
				backgroundColor: 'teal',
				paddingVertical: 12,
				paddingHorizontal: 24,
				borderRadius: 6,
				alignItems: 'center',
			},
			text: {
				color: 'white',
				fontSize: 16,
				fontWeight: 'bold',
			},
		},
		secondary: {
			touchOpacity: {
				backgroundColor: 'white',
				paddingVertical: 12,
				paddingHorizontal: 24,
				borderRadius: 6,
				alignItems: 'center',
				borderColor: 'teal',
				borderWidth: 3,
			},
			text: {
				color: 'teal',
				fontSize: 16,
				fontWeight: 'bold',
			},
		},
	},
	textInput: {
		padding: 10,
		borderWidth: 1,
		borderColor: 'grey',
	},
	repoContainer: {
		display: 'flex',
		backgroundColor: '#fff',
		gap: 20,
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		marginHorizontal: 20,
		justifyContent: 'center',
		alignContents: 'center',
	},
	pageContainer: {},
};

export default theme;
