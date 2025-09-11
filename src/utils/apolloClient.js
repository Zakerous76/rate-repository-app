/* eslint-disable no-undef */
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';

import { apolloURI } from '../constants';

const createApolloClient = (authStorage) => {
	console.log('createApolloClient creating');
	// eslint-disable-next-line no-unused-vars
	const authLink = new SetContextLink(async (prevContext, _operation) => {
		try {
			const accessToken = await authStorage.getAccessToken();
			console.log('authorization:', `Bearer ${accessToken}`);
			return {
				headers: {
					...prevContext.headers,
					authorization: accessToken ? `Bearer ${accessToken}` : '',
				},
			};
		} catch (error) {
			console.log(error);
			return {
				headers: prevContext.headers,
			};
		}
	});

	const httpLink = new HttpLink({ uri: apolloURI });
	const link = authLink.concat(httpLink);
	return new ApolloClient({
		link,
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;
