import { useQuery } from '@apollo/client/react';
import { FlatList, Text, View } from 'react-native';
import { GET_REPO_QUERY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import { useRoute } from '@react-navigation/native';
import WebWrapper from './WebWrapper';
import { format, parseISO } from 'date-fns';
import Svg, { Circle } from 'react-native-svg';
import theme from '../theme';

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

	const reviews = data.repository?.reviews?.edges?.map((node) => node.node);
	return (
		<WebWrapper>
			<FlatList
				style={{
					marginHorizontal: theme.container.marginHorizontal,
					marginBottom: 30,
				}}
				data={reviews}
				ListHeaderComponent={() => (
					<RepositoryItem
						item={data.repository}
						showButton={true}
					/>
				)}
				keyExtractor={({ id }) => id}
				renderItem={({ item }) => <ReviewItem review={item} />}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
			/>
		</WebWrapper>
	);
};

export default RepositoryView;

const ReviewItem = ({ review }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				gap: 15,
				backgroundColor: theme.colors.white,
				padding: theme.repoContainer.padding,
				borderRadius: theme.repoContainer.borderRadius,
			}}
		>
			<View>
				<CircularRating rating={review.rating} />
			</View>
			<View style={{ gap: 10, paddingBottom: 2 }}>
				<View style={{ gap: 2 }}>
					<Text style={{ fontWeight: 'bold' }}>{review.user.username}</Text>
					<Text style={{ color: 'grey' }}>
						{format(parseISO(review.createdAt), 'MMM d, yyyy')}
					</Text>
				</View>
				<View>
					<Text
						style={{
							overflow: 'hidden',
							position: 'relative',
							maxWidth: '88%',
						}}
					>
						{review.text}
					</Text>
				</View>
			</View>
		</View>
	);
};

const CircularRating = ({ rating, size = 60, strokeWidth = 5 }) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const progress = (rating / 100) * circumference;

	return (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<Svg
				width={size}
				height={size}
			>
				{/* Background circle */}
				<Circle
					stroke='#eee'
					fill='none'
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={strokeWidth}
				/>
				{/* Progress circle */}
				<Circle
					stroke={theme.colors.primary}
					fill='none'
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={circumference - progress}
					strokeLinecap='round'
				/>
			</Svg>
			{/* Rating text in the center */}
			<View
				style={{
					position: 'absolute',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text style={{ fontSize: 16, color: theme.colors.primary }}>
					{rating}
				</Text>
			</View>
		</View>
	);
};
