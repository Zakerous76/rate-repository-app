import { Platform, View } from 'react-native';
import { motion } from 'framer-motion';

import React from 'react';

const WebWrapper = ({ children }) => {
	if (Platform.OS === 'web') {
		return (
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -50 }}
				transition={{ duration: 0.3 }}
				style={{ height: '100%', width: '100%' }}
			>
				{children}
			</motion.div>
		);
	}
};

export default WebWrapper;
