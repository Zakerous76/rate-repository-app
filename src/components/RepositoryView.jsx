import { useQuery } from '@apollo/client/react';
import { Text, View } from 'react-native';
import { GET_REPO_QUERY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import { useRoute } from '@react-navigation/native';
import WebWrapper from './WebWrapper';

const RepositoryView = () => {
	const route = useRoute();

	const { repoId } = route.params;
	const { loading, error, data } = useQuery(GET_REPO_QUERY, {
		variables: { id: repoId },
	});
	if (loading) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}
	if (error) {
		return (
			<View>
				<Text>{error.message}</Text>
			</View>
		);
	}

	return (
		<WebWrapper>
			<RepositoryItem
				item={data.repository}
				showButton={true}
			/>
		</WebWrapper>
	);
};

export default RepositoryView;
