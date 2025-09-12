import { Text, View } from 'react-native';
import BMIFrom from './BMIForm';
import { useState } from 'react';
import WebWrapper from '../WebWrapper';

const getBMI = (mass, height) => {
	return Math.round(mass / Math.pow(height / 100, 2));
};

const BMI = () => {
	const [bmi, setBmi] = useState(0);
	const handleFormSubmit = (e) => {
		console.log('form submitted');
		const bmi = getBMI(Number(e.mass), Number(e.height));
		setBmi(bmi);
	};
	return (
		<WebWrapper>
			<View>
				<BMIFrom
					onSubmit={handleFormSubmit}
					bmi={bmi}
				/>
			</View>
		</WebWrapper>
	);
};

export default BMI;
