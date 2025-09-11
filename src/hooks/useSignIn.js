/* eslint-disable no-undef */
import { useApolloClient, useMutation } from '@apollo/client/react';
import { SIGN_IN_MUTATION } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
	const [mutate, result] = useMutation(SIGN_IN_MUTATION);
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	const signIn = async ({ username, password }) => {
		const { data } = await mutate({
			variables: { credentials: { username, password } },
		});
		console.log('data.authenticate.accessToken', data.authenticate.accessToken);
		authStorage.setAccessToken(data.authenticate.accessToken);
		apolloClient.resetStore();
		return data;
	};

	return [signIn, result];
};

export default useSignIn;
