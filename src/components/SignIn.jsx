import { useFormik } from 'formik';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useEffect, useState } from 'react';
import authStorage from '../utils/authStorage';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(3, 'Username must be at least 3 characters') // corrected error message
		.required('Username is required'),

	password: yup
		.string()
		.min(6, 'Password is at least 6 characters long')
		.required('Password is required'),
});

const SignIn = () => {
	const [signIn, result] = useSignIn();
	const [user, setUser] = useState();
	const [authError, setAuthError] = useState('');
	const tokenStorage = new authStorage.AuthStorage('accessTokenStorage');
	const [accessToken, setAccessToken] = useState();

	const onSubmit = async () => {
		console.log(signInFormik.values);
		try {
			await signIn({
				username: signInFormik.values.username,
				password: signInFormik.values.password,
			});
		} catch (e) {
			setAuthError(e?.message);
			console.log(e?.message);
			setTimeout(() => {
				setAuthError('');
			}, 3000);
		}
	};

	useEffect(() => {
		const getAccessToken = async () => {
			console.log('result.data?.authenticate:', result.data?.authenticate);
			setUser(result.data);
			await tokenStorage.setAccessToken(result.data.authenticate.accessToken);
			const res = await tokenStorage.getAccessToken();
			setAccessToken(res);
			console.log('accessToken from storage (res):', res);
		};
		if (result.data) {
			getAccessToken();
		}
	}, [result.data]);

	useEffect(() => {
		console.log('accessToken from storage:', accessToken);
	}, [accessToken]);

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
			{authError.length > 1 && (
				<Text style={{ color: '#d73a4a' }}>{authError}</Text>
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
