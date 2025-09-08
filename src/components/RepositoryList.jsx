import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	const { repositories } = useRepositories();

	const repositorNodes = repositories
		? repositories?.repositories?.edges?.map((edge) => edge.node)
		: [];

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
