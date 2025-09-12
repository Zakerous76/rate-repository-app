import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ mockRepo }) => {
	let response;
	let repositorNodes = [];

	if (mockRepo) {
		const { loading, error, data } = useQuery(GET_REPOSITORIES);
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
					<Text>Error: {error.message}</Text>
				</View>
			);
		}
		repositorNodes = data?.repositories?.edges?.map((edge) => edge.node);
	} else {
		response = useRepositories();
		repositorNodes = response
			? response?.repositories?.repositories?.edges?.map((edge) => edge.node)
			: [];
	}

	return (
		<FlatList
			data={repositorNodes}
			style={{ marginHorizontal: 20 }}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item, index, separators }) => (
				<RepositoryItem
					item={item}
					separators={separators}
					index={index}
				/>
			)}
			keyExtractor={(item) => item.id}
			showsVerticalScrollIndicator={false}
			// other props
		/>
	);
};

export default RepositoryList;
