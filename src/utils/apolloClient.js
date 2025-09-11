import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

import { apolloURI } from '../constants';

const createApolloClient = () => {
	const link = new HttpLink({
		uri: apolloURI,
	});

	return new ApolloClient({
		link,
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;
