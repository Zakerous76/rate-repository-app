import React, { useEffect } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client/react';

const SignOut = () => {
	const navigate = useNavigate();
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	useEffect(() => {
		const signOut = async () => {
			await authStorage.removeAccessToken();
			await apolloClient.resetStore();
			navigate('/');
		};
		signOut();
	}, []);
};

export default SignOut;
