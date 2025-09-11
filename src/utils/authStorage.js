import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Platform } from 'react-native';

class AuthStorageMobile {
	constructor(namespace = 'auth') {
		this.namespace = namespace;
		this.accessTokenName = `${namespace}-accessToken`;
	}

	async getAccessToken() {
		return await SecureStore.getItemAsync(this.accessTokenName);
	}
	async setAccessToken(accessToken) {
		await SecureStore.setItemAsync(this.accessTokenName, accessToken);
	}
	async removeAccessToken() {
		await SecureStore.deleteItemAsync(this.accessTokenName);
	}
}

class AuthStorageWeb {
	constructor(namespace = 'auth') {
		this.namespace = namespace;
		this.accessTokenName = `${namespace}-accessToken`;
	}

	getAccessToken() {
		return AsyncStorage.getItem(this.accessTokenName);
	}
	setAccessToken(accessToken) {
		AsyncStorage.setItem(this.accessTokenName, accessToken);
	}
	removeAccessToken() {
		AsyncStorage.removeItem(this.accessTokenName);
	}
}

export default {
	AuthStorage: Platform.OS === 'web' ? AuthStorageWeb : AuthStorageMobile,
};
