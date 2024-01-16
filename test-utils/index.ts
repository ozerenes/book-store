import React from 'react';
import userEvent from '@testing-library/user-event';
import { PaymentForm } from '../src/components/molecules/PaymentForm';
import { act } from 'react-dom/test-utils';
import {render,screen} from "@testing-library/react";

// Mock notifications module
jest.mock('@mantine/notifications', () => ({
    notifications: {
        show: jest.fn(),
    },
}));

describe('PaymentForm', () => {
    test('renders PaymentForm and submits form', async () => {
        const closeMock = jest.fn();

        render(<PaymentForm close={closeMock} totalMoney={100} />);

        // Fill in the form fields
        userEvent.type(screen.getByLabelText(/İsim/i), 'John Doe');
        userEvent.type(screen.getByLabelText(/Email/i), 'john@example.com');
        userEvent.type(screen.getByLabelText(/Yaş/i), '25');
        userEvent.type(screen.getByLabelText(/Adres 1/i), '123 Main St');
        userEvent.type(screen.getByLabelText(/Adres 2/i), 'Apt 456');

        // Submit the form
        await act(async () => {
            userEvent.click(screen.getByText(/Satın Al/i));
        });

        // Assert that the form was submitted
        expect(closeMock).toHaveBeenCalled();

        // Assert that notifications.show was called
        expect(require('@mantine/notifications').notifications.show).toHaveBeenCalledWith({
            title: 'Satın alma işlemi başarı ile gerçekleşti.',
            message: 'Keyifli alışverişler dileriz.',
            pos: 'fixed',
            bottom: 30,
            right: 30,
            color: 'blue',
        });
    });
});
