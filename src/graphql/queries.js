import { gql } from '@apollo/client';
import { REPO_FRAGMENT } from './fragments';

export const GET_REPOSITORIES = gql`
	query Repositories {
		repositories {
			totalCount
			edges {
				node {
					...RepoFragment
				}
			}
		}
	}
	${REPO_FRAGMENT}
`;

export const ME_QUERY = gql`
	query {
		me {
			id
			username
		}
	}
`;

export const GET_REPO_QUERY = gql`
	query GetRepository($id: ID!) {
		repository(id: $id) {
			...RepoFragment
		}
	}
	${REPO_FRAGMENT}
`;
