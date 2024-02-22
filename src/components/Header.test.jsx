// tests/Movies.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from "./Header";
import { describe, expect, it } from 'vitest';

it('renders movies correctly', () => {
    render(<Header />);
    expect(screen.getByText(/sale/i)).toBeInTheDocument();
    expect(1 + 1).toBe(2);
});

describe('header component', () => {

    it('should have an input search field', () => {
        render(<Header />)
        const user = userEvent.setup();
        const inputElement = screen.getByPlaceholderText(/search/i);

        expect(inputElement).toBeInTheDocument();
    })


    it.fails("should  change the input value", async () => {
        render(<Header />)
        const user = userEvent.setup();
        const inputElement = screen.getByPlaceholderText(/search/i);

        await user.type(inputElement, "ahmed");
        expect(inputElement).toHaveValue("");

    })

    it("should  change the input value", async () => {
        render(<Header />)
        const user = userEvent.setup();
        const inputElement = screen.getByPlaceholderText(/search/i);

        await user.type(inputElement, "ahmed");
        expect(inputElement).toHaveValue("ahmed");

    })
})
