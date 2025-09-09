import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

import Constants from 'expo-constants';

const createApolloClient = () => {
	const link = new HttpLink({
		uri: `${Constants.expoConfig.extra?.apolloUri}`,
	});

	return new ApolloClient({
		link,
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;
