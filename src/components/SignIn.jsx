import { useFormik } from 'formik';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import theme from '../theme';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(6, 'Username must be at least 6 characters') // corrected error message
		.required('Username is required'),

	password: yup
		.string()
		.min(6, 'Password is at least 6 characters long')
		.required('Password is required'),
});

const SignIn = () => {
	const onSubmit = () => {
		console.log(signInFormik.values);
	};

	const signInFormik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<View style={{ paddingHorizontal: 20, gap: 10, justifyContent: 'center' }}>
			<TextInput
				placeholder='Username'
				textContentType='name'
				style={theme.textInput}
				onChangeText={signInFormik.handleChange('username')}
			></TextInput>
			{signInFormik.touched.username && signInFormik.errors.username && (
				<Text style={{ color: '#d73a4a' }}>{signInFormik.errors.username}</Text>
			)}
			<TextInput
				placeholder='Password'
				textContentType='password'
				secureTextEntry
				style={theme.textInput}
				onChangeText={signInFormik.handleChange('password')}
			></TextInput>
			{signInFormik.touched.password && signInFormik.errors.password && (
				<Text style={{ color: '#d73a4a' }}>{signInFormik.errors.password}</Text>
			)}
			<TouchableOpacity
				onPress={signInFormik.handleSubmit}
				style={theme.button.primary.touchOpacity}
			>
				<Text style={theme.button.primary.text}>Sign In</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SignIn;
