import { gql } from '@apollo/client';

export const SIGN_IN_MUTATION = gql`
	mutation SignIn($credentials: AuthenticateInput!) {
		authenticate(credentials: $credentials) {
			accessToken
			expiresAt
			user {
				id
				username
				createdAt
				reviewCount
			}
		}
	}
`;
