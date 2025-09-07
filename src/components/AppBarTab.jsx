import Text from './Text';
import theme from '../theme';
import { Pressable } from 'react-native';
import { Link } from 'react-router-native';

const AppBarTab = ({ styles, children, linkTo, ...props }) => {
	return (
		<Pressable>
			<Link to={linkTo}>
				<Text
					fontSize='subheading'
					fontWeight='bold'
					style={{ color: theme.colors.white, ...styles }}
					{...props}
				>
					{children}
				</Text>
			</Link>
		</Pressable>
	);
};

export default AppBarTab;
