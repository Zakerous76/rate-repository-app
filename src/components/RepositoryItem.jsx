import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	flexContainer: {
		display: 'flex',
		backgroundColor: theme.colors.white,
		gap: 20,
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
	},
	flexDirectionRow: {
		flexDirection: 'row',
	},
	flexDirectionColumn: {
		flexDirection: 'row',
	},
	statsCenter: {
		alignItems: 'center',
		gap: 7,
	},

	languageTag: {
		backgroundColor: theme.colors.primary,
		color: theme.colors.white,
		paddingHorizontal: 6,
		paddingVertical: 4,
		marginTop: 4,
		alignSelf: 'flex-start',
	},
});

const RepositoryItem = ({ item, index, separators }) => {
	const stars =
		item.stargazersCount > 999
			? `${(item.stargazersCount / 1000).toFixed(1)}k`
			: item.stargazersCount;
	const reviews =
		item.reviewCount > 999
			? `${(item.reviewCount / 1000).toFixed(1)}k`
			: item.reviewCount;
	const forks =
		item.forksCount > 999
			? `${(item.forksCount / 1000).toFixed(1)}k`
			: item.forksCount;
	const rating =
		item.ratingAverage > 999
			? `${(item.ratingAverage / 1000).toFixed(1)}k`
			: item.ratingAverage;
	return (
		<View style={styles.flexContainer}>
			<View style={{ flexDirection: 'row', gap: 15, padding: 3 }}>
				<View>
					<Image
						source={{
							uri: item.ownerAvatarUrl,
						}}
						style={{ width: 50, height: 50, borderRadius: 5 }}
					/>
				</View>
				<View style={{ flexShrink: 1, gap: 7 }}>
					<Text fontWeight={'bold'}>{item.fullName}</Text>
					<Text style={{}}>{item.description}</Text>
					<Text style={styles.languageTag}>{item.language}</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
				}}
			>
				<View style={styles.statsCenter}>
					<Text fontWeight={'bold'}>{stars}</Text>
					<Text>Stars</Text>
				</View>
				<View style={styles.statsCenter}>
					<Text fontWeight={'bold'}>{forks}</Text>
					<Text>Forks</Text>
				</View>
				<View style={styles.statsCenter}>
					<Text fontWeight={'bold'}>{reviews}</Text>
					<Text>Reviews</Text>
				</View>
				<View style={styles.statsCenter}>
					<Text fontWeight={'bold'}>{rating}</Text>
					<Text>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;
