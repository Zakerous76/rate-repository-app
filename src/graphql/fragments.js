import { gql } from '@apollo/client';

export const REPO_FRAGMENT = gql`
	fragment RepoFragment on Repository {
		id
		fullName
		ratingAverage
		reviewCount
		stargazersCount
		forksCount
		ownerAvatarUrl
		description
		language
		url
	}
`;
