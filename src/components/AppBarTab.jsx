import Text from './Text';
import theme from '../theme';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppBarTab = ({ styles, children, linkTo, ...props }) => {
	const navigation = useNavigation();
	return (
		<Pressable
			onPress={() => {
				navigation.navigate(linkTo);
			}}
		>
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
