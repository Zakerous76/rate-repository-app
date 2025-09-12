import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query Repositories {
		repositories {
			totalCount
			edges {
				node {
					id
					fullName
					ratingAverage
					reviewCount
					stargazersCount
					forksCount
					ownerAvatarUrl
					description
					language
				}
			}
		}
	}
`;

export const ME_QUERY = gql`
	query {
		me {
			id
			username
		}
	}
`;
