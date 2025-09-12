import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { ApolloProvider } from '@apollo/client/react';
import authStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { NavigationContainer } from '@react-navigation/native';

import createApolloClient from './src/utils/apolloClient';

const AuthStorage = new authStorage.AuthStorage();

const apolloClient = createApolloClient(AuthStorage);

export default function App() {
	return (
		<>
			<ApolloProvider client={apolloClient}>
				<AuthStorageContext.Provider value={AuthStorage}>
					<NavigationContainer>
						<Main />
					</NavigationContainer>
				</AuthStorageContext.Provider>
			</ApolloProvider>
			<StatusBar style='inverted' />
		</>
	);
}
