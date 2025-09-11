import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client/react';
import Constants from 'expo-constants';

import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

export default function App() {
	// eslint-disable-next-line no-undef
	console.log(Constants.expoConfig);
	return (
		<>
			<NativeRouter>
				<ApolloProvider client={apolloClient}>
					<Main />
				</ApolloProvider>
			</NativeRouter>
			<StatusBar style='inverted' />
		</>
	);
}
