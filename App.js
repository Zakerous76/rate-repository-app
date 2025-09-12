import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client/react';
import authStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

import createApolloClient from './src/utils/apolloClient';

const AuthStorage = new authStorage.AuthStorage();

const apolloClient = createApolloClient(AuthStorage);

export default function App() {
	return (
		<>
			<NativeRouter>
				<ApolloProvider client={apolloClient}>
					<AuthStorageContext.Provider value={AuthStorage}>
						<Main />
					</AuthStorageContext.Provider>
				</ApolloProvider>
			</NativeRouter>
			<StatusBar style='inverted' />
		</>
	);
}
