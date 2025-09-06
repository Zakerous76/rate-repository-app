import Text from './Text';
import theme from '../theme';
import { Pressable } from 'react-native';

const AppBarTab = ({ styles, children, ...props }) => {
	return (
		<Pressable>
			<Text
				fontSize='subheading'
				fontWeight='bold'
				style={{ color: theme.colors.white, ...styles }}
				{...props}
			>
				{children}
			</Text>
		</Pressable>
	);
};

export default AppBarTab;
