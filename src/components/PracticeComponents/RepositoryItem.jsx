import { Alert, Image, Text, TouchableHighlight, View } from 'react-native';

const RepositoryItem = ({ item, index, separators }) => {
	return (
		<TouchableHighlight
			key={item.key}
			onPress={() => alert(`Clicked on ${item.fullName}`)}
			onShowUnderlay={separators.highlight}
			onHideUnderlay={separators.unhighlight}
		>
			<View>
				<Image
					source={{
						uri: item.ownerAvatarUrl,
					}}
					style={{ width: 50, height: 50 }}
				/>
				<Text>Full name: {item.fullName}</Text>
				<Text>Description: {item.description}</Text>
				<Text>Language: {item.language}</Text>
				<Text>Stars: {item.stargazersCount}</Text>
				<Text>Forks: {item.forksCount}</Text>
				<Text>Reviews: {item.reviewCount}</Text>
				<Text>Rating: {item.ratingAverage}</Text>
			</View>
		</TouchableHighlight>
	);
};

export default RepositoryItem;
