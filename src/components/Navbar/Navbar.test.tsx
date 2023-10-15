import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe("Given a Navbar Component", () => {
    describe("When the component is rendered", () => {
        render(<Navbar />)


    });

    test("then The character will be loking", () => {
        expect(screen.getByRole("searchInput")).toBeDefined();
    })
})