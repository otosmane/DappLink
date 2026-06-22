// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DappLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DappLink/i);
    expect(titleElement).toBeInTheDocument();
});
