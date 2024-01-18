import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaymentForm } from '../src/components/molecules/PaymentForm';

describe('PaymentForm component', () => {
  test('renders PaymentForm component', () => {
    const closeMock = () => {};
    const totalMoney = 100; // replace with your desired total money value

    render(<PaymentForm close={closeMock} totalMoney={totalMoney} />);

    // You can add more specific tests based on your component's behavior and structure
    expect(screen.getByLabelText(/İsim/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Yaş/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Adres 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Adres 2/i)).toBeInTheDocument();
    expect(screen.getByText(`Toplam : ${totalMoney.toFixed()} TRY`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Satın Al/i })).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    const closeMock = () => {};
    const totalMoney = 100; // replace with your desired total money value

    render(<PaymentForm close={closeMock} totalMoney={totalMoney} />);

    // Fill in the form with valid data
    userEvent.type(screen.getByLabelText(/İsim/i), 'John Doe');
    userEvent.type(screen.getByLabelText(/Email/i), 'john.doe@example.com');
    userEvent.type(screen.getByLabelText(/Yaş/i), '25');
    userEvent.type(screen.getByLabelText(/Adres 1/i), '123 Main St');
    userEvent.type(screen.getByLabelText(/Adres 2/i), 'Apt 4');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Satın Al/i }));

    // Wait for the success notification to appear (you might need to adjust the timing)
    await waitFor(() => {
      expect(screen.getByText(/Satın alma işlemi başarı ile gerçekleşti/i)).toBeInTheDocument();
    });

    // Additional assertions or expectations if needed
    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases for different scenarios as needed
});
