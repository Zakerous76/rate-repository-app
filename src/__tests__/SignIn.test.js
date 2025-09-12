import {
	render,
	screen,
	fireEvent,
	waitFor,
} from '@testing-library/react-native';
import SignInContainer from '../components/SignInContainer';

describe('SignIn', () => {
	describe('SignInContainer', () => {
		it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
			// render the SignInContainer component, fill the text inputs and press the submit button
			const mockFn = jest.fn();
			render(<SignInContainer handleSubmit={mockFn} />);
			fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
			fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');

			await waitFor(() => {
				fireEvent.press(screen.getByText('Sign In'));
			});
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(mockFn.mock.calls[0][0]).toEqual({
				username: 'kalle',
				password: 'password',
			});
		});
	});
});
