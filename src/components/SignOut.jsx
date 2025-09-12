import React, { useEffect } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client/react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import WebWrapper from './WebWrapper';

const SignOut = () => {
	const navigate = useNavigation();
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	useEffect(() => {
		const signOut = async () => {
			await authStorage.removeAccessToken();
			await apolloClient.resetStore();
			navigate.navigate('RepositoryList');
		};
		signOut();
	}, []);

	return (
		<WebWrapper>
			<View style={{ justifyContent: 'center' }}>
				<Text>Signing Out...</Text>
			</View>
		</WebWrapper>
	);
};

export default SignOut;
