import { useFormik } from 'formik';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import theme from '../../theme';

const initialValues = {
	mass: '',
	height: '',
};

const validationSchema = yup.object().shape({
	mass: yup
		.number()
		.min(1, 'Weight must be greater than or equal to 1')
		.required('Weight is required'),
	height: yup
		.number()
		.min(50, 'Height must be greater than or equal to 50')
		.required('Height is required'),
});

const BMIFrom = ({ onSubmit, bmi }) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});
	return (
		<View style={{ paddingHorizontal: 20, gap: 10 }}>
			<TextInput
				style={theme.textInput}
				placeholder='Weight (kg)'
				value={formik.values.mass}
				onChangeText={formik.handleChange('mass')}
				keyboardType='numeric'
			/>
			{formik.touched.mass && formik.errors.mass && (
				<Text style={{ color: 'red' }}>{formik.errors.mass}</Text>
			)}
			<TextInput
				style={theme.textInput}
				placeholder='Height (cm)'
				value={formik.values.height}
				onChangeText={formik.handleChange('height')}
				keyboardType='numeric'
			/>
			{formik.touched.height && formik.errors.height && (
				<Text style={{ color: 'red' }}>{formik.errors.height}</Text>
			)}

			<TouchableOpacity
				onPress={formik.handleSubmit}
				style={theme.button.primary.touchOpacity}
			>
				<Text style={theme.button.primary.text}>Calculate</Text>
			</TouchableOpacity>
			<Text style={{ alignSelf: 'center' }}>{bmi}</Text>
		</View>
	);
};

export default BMIFrom;
