import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
	const [repositories, setRepositories] = useState([]);
	const [loading, setLoading] = useState(false);
	const { loading: loadingQuery, data } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	});

	const fetchRepositories = async () => {
		setLoading(true);

		// Replace the IP address part with your own IP address!
		// eslint-disable-next-line no-undef
		if (loadingQuery) {
			return;
		}
		setLoading(false);
		setRepositories(data);
	};

	useEffect(() => {
		fetchRepositories();
	}, [loadingQuery]);

	return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
