import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { graphqlApiUrl } from '../constants';

const createApolloClient = () => {
	const link = new HttpLink({
		uri: `${graphqlApiUrl}`,
	});

	return new ApolloClient({
		link,
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;
