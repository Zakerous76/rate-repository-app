import { useFormik } from 'formik';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useEffect, useState } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigation } from '@react-navigation/native';
import WebWrapper from './WebWrapper';

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
	const authStorage = useAuthStorage();
	const navigation = useNavigation();

	const [signIn, _] = useSignIn();
	const [user, setUser] = useState();
	const [authError, setAuthError] = useState('');

	useEffect(() => {
		const init = async () => {
			setUser(await authStorage.getAccessToken());
		};
		init();
	}, []);

	const onSubmit = async () => {
		console.log(signInFormik.values);
		try {
			await signIn({
				username: signInFormik.values.username,
				password: signInFormik.values.password,
			});
			setUser(await authStorage.getAccessToken());
		} catch (e) {
			setAuthError(e?.message);
			console.log(e?.message);
			setTimeout(() => {
				setAuthError('');
			}, 3000);
		}
	};

	useEffect(() => {
		if (user) {
			navigation.navigate('Repositories');
		}
	}, [user]);

	const signInFormik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<WebWrapper>
			<View
				style={{ paddingHorizontal: 20, gap: 10, justifyContent: 'center' }}
			>
				<TextInput
					placeholder='Username'
					textContentType='name'
					style={theme.textInput}
					onChangeText={signInFormik.handleChange('username')}
				></TextInput>
				{signInFormik.touched.username && signInFormik.errors.username && (
					<Text style={{ color: '#d73a4a' }}>
						{signInFormik.errors.username}
					</Text>
				)}
				<TextInput
					placeholder='Password'
					textContentType='password'
					secureTextEntry
					style={theme.textInput}
					onChangeText={signInFormik.handleChange('password')}
				></TextInput>
				{signInFormik.touched.password && signInFormik.errors.password && (
					<Text style={{ color: '#d73a4a' }}>
						{signInFormik.errors.password}
					</Text>
				)}
				{authError.length > 1 && (
					<Text style={{ color: '#d73a4a' }}>{authError}</Text>
				)}
				<TouchableOpacity
					onPress={signInFormik.handleSubmit}
					style={theme.button.primary.touchableOpacity}
				>
					<Text style={theme.button.primary.text}>Sign In</Text>
				</TouchableOpacity>
			</View>
		</WebWrapper>
	);
};

export default SignIn;
