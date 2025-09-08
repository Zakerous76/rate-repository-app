import { Text, View } from 'react-native';
import BMIFrom from './BMIForm';
import { useState } from 'react';

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
		<View>
			<BMIFrom
				onSubmit={handleFormSubmit}
				bmi={bmi}
			/>
		</View>
	);
};

export default BMI;
