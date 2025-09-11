import { useMutation } from '@apollo/client/react';
import { SIGN_IN_MUTATION } from '../graphql/mutations';

const useSignIn = () => {
	const [mutate, result] = useMutation(SIGN_IN_MUTATION);

	const signIn = async ({ username, password }) => {
		const { data } = await mutate({
			variables: { credentials: { username, password } },
		});
		return data;
	};

	return [signIn, result];
};

export default useSignIn;
